import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import RestaurantOwner from "../models/RestaurantOwner.js";

const router = express.Router();

// 🟢 Business/Restaurant Owner Registration
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
        // Check if email already exists
        const existingOwner = await RestaurantOwner.findOne({ "owner.email": ownerEmail });
        if (existingOwner) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(ownerPassword, 10);

        // Create new restaurant owner
        const newOwner = await RestaurantOwner.create({
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
            waiters: [], // Initialize empty waiters array
        });

        // Generate JWT token
        const token = jwt.sign(
            {
                id: newOwner._id,
                email: newOwner.owner.email,
                role: "business",
                restaurantName: newOwner.restaurant.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Remove password from response
        const ownerResponse = newOwner.toObject();
        delete ownerResponse.owner.password;

        res.json({
            msg: "Restaurant registered successfully",
            token,
            owner: ownerResponse,
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ msg: err.message });
    }
});

// 🟢 Business/Restaurant Owner Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find restaurant owner by email
        const owner = await RestaurantOwner.findOne({ "owner.email": email });
        if (!owner) {
            return res.status(404).json({ msg: "Account not found" });
        }

        // Verify password
        const valid = await bcrypt.compare(password, owner.owner.password);
        if (!valid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                id: owner._id,
                email: owner.owner.email,
                role: "business",
                restaurantName: owner.restaurant.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Remove password from response
        const ownerResponse = owner.toObject();
        delete ownerResponse.owner.password;

        res.json({
            msg: "Login successful",
            token,
            owner: ownerResponse,
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ msg: err.message });
    }
});
// 🟢 Staff Login
router.post("/staff/login", async (req, res) => {
    const { restaurantName, phone, password } = req.body;

    try {
        // Find restaurant by name
        const owner = await RestaurantOwner.findOne({ "restaurant.name": restaurantName });
        if (!owner) {
            return res.status(404).json({ msg: "Restaurant not found" });
        }

        // Find staff member in the waiters array
        const staffMember = owner.waiters.find(w => w.phone === phone);
        if (!staffMember) {
            return res.status(404).json({ msg: "Staff member not found" });
        }

        // Check if account is active
        if (!staffMember.isActive) {
            return res.status(403).json({ msg: "Account is disabled" });
        }

        // Verify password
        const valid = await bcrypt.compare(password, staffMember.password);
        if (!valid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
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

        // Remove password from response
        const staffResponse = staffMember.toObject();
        delete staffResponse.password;

        res.json({
            msg: "Login successful",
            token,
            staff: staffResponse,
            restaurantName: owner.restaurant.name
        });
    } catch (err) {
        console.error("Staff login error:", err);
        res.status(500).json({ msg: err.message });
    }
});

export default router;
