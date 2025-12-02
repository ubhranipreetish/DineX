import express from "express";
import Order from "../models/Order.js";
import { verifyBusinessToken } from "../middleware/businessAuth.js";
import RestaurantOwner from "../models/RestaurantOwner.js";

const router = express.Router();

const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD_${timestamp}_${random}`;
};

const getRestaurantDetails = async (req, res, next) => {
    try {
        let ownerId = req.user.id;
        console.log("User Role:", req.user.role);

        if (req.user.role === 'staff') {
            ownerId = req.user.ownerId;
        }
        console.log("Resolved Owner ID:", ownerId);

        const restaurantOwner = await RestaurantOwner.findById(ownerId);
        if (!restaurantOwner) {
            console.log("Restaurant not found for ID:", ownerId);
            return res.status(404).json({ msg: "Restaurant not found" });
        }
        req.restaurantId = restaurantOwner._id;
        req.restaurantName = restaurantOwner.restaurant.name;
        next();
    } catch (err) {
        console.error("Error fetching restaurant details:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

router.post("/", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { tableNo, items } = req.body;

        if (!tableNo || !items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ msg: "Missing required fields: tableNo and items" });
        }

        for (const item of items) {
            if (!item.itemId || !item.name || !item.price) {
                return res.status(400).json({ msg: "Each item must have itemId, name, and price" });
            }
        }

        const orderId = generateOrderId();

        const newOrder = new Order({
            orderId,
            restaurantId: req.restaurantId,
            restaurantName: req.restaurantName,
            tableNo,
            items: items.map(item => ({
                itemId: item.itemId,
                name: item.name,
                price: item.price,
                quantity: item.quantity || 1,
                addedAt: new Date(),
                updatedAt: new Date()
            })),
            status: "ongoing"
        });

        newOrder.calculateTotal();

        await newOrder.save();

        await RestaurantOwner.updateOne(
            { _id: req.restaurantId, "tables.tableNumber": tableNo },
            {
                $set: {
                    "tables.$.status": "occupied",
                    "tables.$.currentOrder": newOrder._id,
                    "tables.$.currentBill": newOrder.totalAmount
                }
            }
        );

        res.status(201).json({
            msg: "Order created successfully",
            order: newOrder
        });
    } catch (err) {
        console.error("Error creating order:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.get("/", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { status, tableNo } = req.query;

        const query = { restaurantId: req.restaurantId };

        if (status) {
            query.status = status;
        }

        if (tableNo) {
            query.tableNo = parseInt(tableNo);
        }

        const orders = await Order.find(query).sort({ createdAt: -1 });

        res.json({
            orders,
            count: orders.length
        });
    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.get("/ongoing", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const orders = await Order.find({
            restaurantId: req.restaurantId,
            status: "ongoing"
        }).sort({ createdAt: -1 });

        res.json({
            orders,
            count: orders.length
        });
    } catch (err) {
        console.error("Error fetching ongoing orders:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.get("/table/:tableNo", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { tableNo } = req.params;

        const order = await Order.findOne({
            restaurantId: req.restaurantId,
            tableNo: parseInt(tableNo),
            status: "ongoing"
        });

        if (!order) {
            return res.status(404).json({ msg: "No ongoing order found for this table" });
        }

        res.json({ order });
    } catch (err) {
        console.error("Error fetching order by table:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.get("/:orderId", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        res.json({ order });
    } catch (err) {
        console.error("Error fetching order:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.post("/:orderId/items", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId } = req.params;
        const { items } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ msg: "Items array is required" });
        }

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        if (order.status !== "ongoing") {
            return res.status(400).json({ msg: "Can only add items to ongoing orders" });
        }

        items.forEach(item => {
            order.items.push({
                itemId: item.itemId,
                name: item.name,
                price: item.price,
                quantity: item.quantity || 1,
                addedAt: new Date(),
                updatedAt: new Date()
            });
        });

        order.calculateTotal();
        order.updatedAt = new Date();

        await order.save();

        await RestaurantOwner.updateOne(
            { _id: req.restaurantId, "tables.tableNumber": order.tableNo },
            {
                $set: {
                    "tables.$.currentBill": order.totalAmount
                }
            }
        );

        res.json({
            msg: "Items added successfully",
            order
        });
    } catch (err) {
        console.error("Error adding items:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.patch("/:orderId/items/:itemIndex", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId, itemIndex } = req.params;
        const { quantity } = req.body;

        if (quantity === undefined || quantity < 0) {
            return res.status(400).json({ msg: "Valid quantity is required" });
        }

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        if (order.status !== "ongoing") {
            return res.status(400).json({ msg: "Can only update ongoing orders" });
        }

        const index = parseInt(itemIndex);
        if (index < 0 || index >= order.items.length) {
            return res.status(400).json({ msg: "Invalid item index" });
        }

        if (quantity === 0) {
            order.items.splice(index, 1);
        } else {
            order.items[index].quantity = quantity;
            order.items[index].updatedAt = new Date();
        }

        order.calculateTotal();
        order.updatedAt = new Date();

        await order.save();

        await RestaurantOwner.updateOne(
            { _id: req.restaurantId, "tables.tableNumber": order.tableNo },
            {
                $set: {
                    "tables.$.currentBill": order.totalAmount
                }
            }
        );

        res.json({
            msg: "Item updated successfully",
            order
        });
    } catch (err) {
        console.error("Error updating item:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.delete("/:orderId/items/:itemIndex", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId, itemIndex } = req.params;

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        if (order.status !== "ongoing") {
            return res.status(400).json({ msg: "Can only update ongoing orders" });
        }

        const index = parseInt(itemIndex);
        if (index < 0 || index >= order.items.length) {
            return res.status(400).json({ msg: "Invalid item index" });
        }

        order.items.splice(index, 1);

        if (order.items.length === 0) {
            return res.status(400).json({ msg: "Cannot remove last item. Cancel the order instead." });
        }

        order.calculateTotal();
        order.updatedAt = new Date();

        await order.save();

        await RestaurantOwner.updateOne(
            { _id: req.restaurantId, "tables.tableNumber": order.tableNo },
            {
                $set: {
                    "tables.$.currentBill": order.totalAmount
                }
            }
        );

        res.json({
            msg: "Item removed successfully",
            order
        });
    } catch (err) {
        console.error("Error removing item:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.patch("/:orderId/complete", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        if (order.status !== "ongoing") {
            return res.status(400).json({ msg: "Can only complete ongoing orders" });
        }

        order.status = "completed";
        order.updatedAt = new Date();

        await order.save();

        await RestaurantOwner.updateOne(
            { _id: req.restaurantId, "tables.tableNumber": order.tableNo },
            {
                $set: {
                    "tables.$.status": "free",
                    "tables.$.currentOrder": null,
                    "tables.$.currentBill": 0
                }
            }
        );

        res.json({
            msg: "Order completed successfully",
            order
        });
    } catch (err) {
        console.error("Error completing order:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.patch("/:orderId/cancel", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        if (order.status !== "ongoing") {
            return res.status(400).json({ msg: "Can only cancel ongoing orders" });
        }

        order.status = "cancelled";
        order.updatedAt = new Date();

        await order.save();

        await RestaurantOwner.updateOne(
            { _id: req.restaurantId, "tables.tableNumber": order.tableNo },
            {
                $set: {
                    "tables.$.status": "free",
                    "tables.$.currentOrder": null,
                    "tables.$.currentBill": 0
                }
            }
        );

        res.json({
            msg: "Order cancelled successfully",
            order
        });
    } catch (err) {
        console.error("Error cancelling order:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.delete("/:orderId", verifyBusinessToken, getRestaurantDetails, async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        if (order.restaurantId.toString() !== req.restaurantId.toString()) {
            return res.status(403).json({ msg: "Access denied" });
        }


        if (order.status === "ongoing") {
            return res.status(400).json({ msg: "Cannot delete ongoing orders. Complete or cancel first." });
        }

        await Order.deleteOne({ orderId });

        res.json({ msg: "Order deleted successfully" });
    } catch (err) {
        console.error("Error deleting order:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

export default router;