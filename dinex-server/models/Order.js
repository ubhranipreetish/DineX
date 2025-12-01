import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    // Restaurant Details
    restaurantId: {
        type: Number,
        required: true,
        index: true
    },

    restaurantName: {
        type: String,
        required: true
    },

    tableNo: {
        type: Number,
        required: true
    },

    // Order Status
    status: {
        type: String,
        enum: ["ongoing", "completed", "cancelled"],
        default: "ongoing",
        index: true
    },

    // All items added to the order
    items: [
        {
            itemId: { type: String, required: true }, // id from menu
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, default: 1 },
            addedAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        }
    ],

    // Calculated every update
    totalAmount: {
        type: Number,
        default: 0
    },

    // Timestamps
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

}, { timestamps: true });

// Compound indexes for efficient queries
OrderSchema.index({ restaurantId: 1, status: 1 });
OrderSchema.index({ restaurantId: 1, tableNo: 1 });

// Method to calculate total amount
OrderSchema.methods.calculateTotal = function () {
    this.totalAmount = this.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    return this.totalAmount;
};

export default mongoose.model("Order", OrderSchema);