import express from "express";
import bcrypt from "bcrypt";
import RestaurantOwner from "../models/RestaurantOwner.js";
import { verifyBusinessToken } from "../middleware/businessAuth.js";

const router = express.Router();

// 🟢 Get Business Owner Profile
router.get("/profile", verifyBusinessToken, async (req, res) => {
    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Remove password from response
        const ownerResponse = owner.toObject();
        delete ownerResponse.owner.password;

        // Remove passwords from all staff members
        if (ownerResponse.waiters) {
            ownerResponse.waiters = ownerResponse.waiters.map(waiter => {
                const waiterObj = { ...waiter };
                delete waiterObj.password;
                return waiterObj;
            });
        }

        res.json({ businessOwner: ownerResponse });
    } catch (err) {
        console.error("Error fetching profile:", err);
        res.status(500).json({ msg: err.message });
    }
});

// 🟢 Update Restaurant Details
router.put("/restaurant", verifyBusinessToken, async (req, res) => {
    const {
        restaurantName,
        restaurantType,
        addressFull,
        addressCity,
        addressState,
        addressPincode,
        totalTables,
    } = req.body;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Update restaurant details
        if (restaurantName) owner.restaurant.name = restaurantName;
        if (restaurantType) owner.restaurant.type = restaurantType;
        if (addressFull) owner.restaurant.address.full = addressFull;
        if (addressCity) owner.restaurant.address.city = addressCity;
        if (addressState) owner.restaurant.address.state = addressState;
        if (addressPincode) owner.restaurant.address.pincode = addressPincode;
        if (totalTables) owner.restaurant.totalTables = totalTables;

        // Update timestamp
        owner.restaurant.updatedAt = new Date();

        await owner.save();

        // Remove password from response
        const ownerResponse = owner.toObject();
        delete ownerResponse.owner.password;

        res.json({
            msg: "Restaurant details updated successfully",
            businessOwner: ownerResponse,
        });
    } catch (err) {
        console.error("Error updating restaurant:", err);
        res.status(500).json({ msg: err.message });
    }
});

// 🟢 Get All Staff Members
router.get("/staff", verifyBusinessToken, async (req, res) => {
    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Remove passwords from staff members
        const staff = owner.waiters.map(waiter => {
            const waiterObj = waiter.toObject();
            delete waiterObj.password;
            return waiterObj;
        });

        res.json({ staff });
    } catch (err) {
        console.error("Error fetching staff:", err);
        res.status(500).json({ msg: err.message });
    }
});

// 🟢 Add New Staff Member
router.post("/staff", verifyBusinessToken, async (req, res) => {
    const { name, phone, password, role } = req.body;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new staff member
        const newStaff = {
            name,
            phone,
            password: hashedPassword,
            role: role || "waiter",
            isActive: true,
            createdAt: new Date(),
        };

        owner.waiters.push(newStaff);
        await owner.save();

        // Get the newly added staff member without password
        const addedStaff = owner.waiters[owner.waiters.length - 1].toObject();
        delete addedStaff.password;

        res.json({
            msg: "Staff member added successfully",
            staff: addedStaff,
        });
    } catch (err) {
        console.error("Error adding staff:", err);
        res.status(500).json({ msg: err.message });
    }
});

// 🟢 Update Staff Member
router.put("/staff/:staffId", verifyBusinessToken, async (req, res) => {
    const { staffId } = req.params;
    const { name, phone, password, role, isActive } = req.body;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Find staff member
        const staffMember = owner.waiters.id(staffId);

        if (!staffMember) {
            return res.status(404).json({ msg: "Staff member not found" });
        }

        // Update fields
        if (name) staffMember.name = name;
        if (phone) staffMember.phone = phone;
        if (password) {
            staffMember.password = await bcrypt.hash(password, 10);
        }
        if (role) staffMember.role = role;
        if (typeof isActive !== "undefined") staffMember.isActive = isActive;

        await owner.save();

        // Return updated staff member without password
        const updatedStaff = staffMember.toObject();
        delete updatedStaff.password;

        res.json({
            msg: "Staff member updated successfully",
            staff: updatedStaff,
        });
    } catch (err) {
        console.error("Error updating staff:", err);
        res.status(500).json({ msg: err.message });
    }
});

// 🟢 Delete Staff Member
router.delete("/staff/:staffId", verifyBusinessToken, async (req, res) => {
    const { staffId } = req.params;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Find and remove staff member
        const staffMember = owner.waiters.id(staffId);

        if (!staffMember) {
            return res.status(404).json({ msg: "Staff member not found" });
        }

        staffMember.deleteOne();
        await owner.save();

        res.json({ msg: "Staff member removed successfully" });
    } catch (err) {
        console.error("Error deleting staff:", err);
        res.status(500).json({ msg: err.message });
    }
});

export default router;
