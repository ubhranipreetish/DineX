import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import RestaurantOwner from "../models/RestaurantOwner.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const {
        ownerName,
        ownerEmail,
        ownerPhone,
        ownerPassword,
        restaurantName,
        restaurantType,
        addressFull,
        addressCity,
        addressState,
        addressPincode,
        totalTables,
    } = req.body;

    try {
        const existingOwner = await RestaurantOwner.findOne({ "owner.email": ownerEmail });
        if (existingOwner) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(ownerPassword, 10);

        const newOwner = new RestaurantOwner({
            owner: {
                name: ownerName,
                email: ownerEmail,
                phone: ownerPhone,
                password: hashedPassword,
            },
            restaurant: {
                name: restaurantName,
                type: restaurantType,
                address: {
                    full: addressFull,
                    city: addressCity,
                    state: addressState,
                    pincode: addressPincode,
                },
                totalTables: totalTables,
            },
            waiters: [], 
        });

        newOwner.tables = Array.from({ length: totalTables }, (_, i) => ({
            tableNumber: i + 1,
            status: "free",
            currentOrder: null,
            currentBill: 0
        }));

        await newOwner.save();

        const businessToken = jwt.sign(
            {
                id: newOwner._id,
                email: newOwner.owner.email,
                role: "business",
                restaurantName: newOwner.restaurant.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        const ownerResponse = newOwner.toObject();
        delete ownerResponse.owner.password;

        res.json({
            msg: "Restaurant registered successfully",
            businessToken,
            businessOwner: ownerResponse,
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ msg: err.message });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const owner = await RestaurantOwner.findOne({ "owner.email": email });
        if (!owner) {
            return res.status(404).json({ msg: "Account not found" });
        }

        const valid = await bcrypt.compare(password, owner.owner.password);
        if (!valid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const businessToken = jwt.sign(
            {
                id: owner._id,
                email: owner.owner.email,
                role: "business",
                restaurantName: owner.restaurant.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        const ownerResponse = owner.toObject();
        delete ownerResponse.owner.password;

        res.json({
            msg: "Login successful",
            businessToken,
            businessOwner: ownerResponse,
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ msg: err.message });
    }
});

router.post("/staff/login", async (req, res) => {
    const { restaurantName, phone, password } = req.body;

    try {
        const owner = await RestaurantOwner.findOne({ "restaurant.name": restaurantName });
        if (!owner) {
            return res.status(404).json({ msg: "Restaurant not found" });
        }

        const staffMember = owner.waiters.find(w => w.phone === phone);
        if (!staffMember) {
            return res.status(404).json({ msg: "Staff member not found" });
        }

        if (!staffMember.isActive) {
            return res.status(403).json({ msg: "Account is disabled" });
        }

        const valid = await bcrypt.compare(password, staffMember.password);
        if (!valid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const staffToken = jwt.sign(
            {
                id: staffMember._id,
                ownerId: owner._id,
                role: "staff",
                staffRole: staffMember.role,
                restaurantName: owner.restaurant.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        const staffResponse = staffMember.toObject();
        delete staffResponse.password;

        res.json({
            msg: "Login successful",
            staffToken,
            staffUser: staffResponse,
            restaurantName: owner.restaurant.name,
            restaurantType: owner.restaurant.type,
            tables: owner.restaurant.totalTables,
            address: owner.restaurant.address
        });
    } catch (err) {
        console.error("Staff login error:", err);
        res.status(500).json({ msg: err.message });
    }
});

router.get("/staff/profile", async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "No token provided, authorization denied" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "staff") {
            return res.status(403).json({ msg: "Access denied. Staff account required." });
        }

        const owner = await RestaurantOwner.findById(decoded.ownerId);
        if (!owner) {
            return res.status(404).json({ msg: "Restaurant not found" });
        }

        const staffMember = owner.waiters.find(w => w._id.toString() === decoded.id.toString());
        if (!staffMember) {
            return res.status(404).json({ msg: "Staff member not found" });
        }

        if (!staffMember.isActive) {
            return res.status(403).json({ msg: "Account is disabled" });
        }

        const staffResponse = staffMember.toObject();
        delete staffResponse.password;

        res.json({
            staffUser: staffResponse,
            restaurantName: owner.restaurant.name,
            restaurantType: owner.restaurant.type,
            tables: owner.tables, // Include tables in response
            address: owner.restaurant.address,
            role: staffMember.role
        });
    } catch (err) {
        console.error("Staff profile error:", err);
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ msg: "Token expired" });
        }
        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({ msg: "Token is not valid" });
        }
        res.status(500).json({ msg: err.message });
    }
});

export default router;
