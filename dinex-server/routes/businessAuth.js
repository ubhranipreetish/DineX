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

export default router;
