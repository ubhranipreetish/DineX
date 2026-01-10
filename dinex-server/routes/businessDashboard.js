import express from "express";
import bcrypt from "bcrypt";
import RestaurantOwner from "../models/RestaurantOwner.js";
import { verifyBusinessToken } from "../middleware/businessAuth.js";

const router = express.Router();

router.get("/profile", verifyBusinessToken, async (req, res) => {
    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        const ownerResponse = owner.toObject();
        delete ownerResponse.owner.password;

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

        if (restaurantName) owner.restaurant.name = restaurantName;
        if (restaurantType) owner.restaurant.type = restaurantType;
        if (addressFull) owner.restaurant.address.full = addressFull;
        if (addressCity) owner.restaurant.address.city = addressCity;
        if (addressState) owner.restaurant.address.state = addressState;
        if (addressPincode) owner.restaurant.address.pincode = addressPincode;
        if (totalTables) owner.restaurant.totalTables = totalTables;

        owner.restaurant.updatedAt = new Date();

        await owner.save();

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

router.get("/staff", verifyBusinessToken, async (req, res) => {
    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

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

router.post("/staff", verifyBusinessToken, async (req, res) => {
    const { name, phone, password, role } = req.body;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        // Check if phone number already exists in this restaurant's staff
        const existingStaff = owner.waiters.find(w => w.phone === phone);
        if (existingStaff) {
            return res.status(400).json({ msg: "A staff member with this phone number already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

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

router.put("/staff/:staffId", verifyBusinessToken, async (req, res) => {
    const { staffId } = req.params;
    const { name, phone, password, role, isActive } = req.body;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

        const staffMember = owner.waiters.id(staffId);

        if (!staffMember) {
            return res.status(404).json({ msg: "Staff member not found" });
        }

        // Check if phone number already exists in another staff member
        if (phone && phone !== staffMember.phone) {
            const existingStaff = owner.waiters.find(w => w.phone === phone && w._id.toString() !== staffId);
            if (existingStaff) {
                return res.status(400).json({ msg: "A staff member with this phone number already exists" });
            }
        }

        if (name) staffMember.name = name;
        if (phone) staffMember.phone = phone;
        if (password) {
            staffMember.password = await bcrypt.hash(password, 10);
        }
        if (role) staffMember.role = role;
        if (typeof isActive !== "undefined") staffMember.isActive = isActive;

        await owner.save();

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

router.delete("/staff/:staffId", verifyBusinessToken, async (req, res) => {
    const { staffId } = req.params;

    try {
        const owner = await RestaurantOwner.findById(req.businessOwnerId);

        if (!owner) {
            return res.status(404).json({ msg: "Owner not found" });
        }

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
