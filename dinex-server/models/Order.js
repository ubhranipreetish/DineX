import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    // ✅ Restaurant Details
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RestaurantOwner",
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

    status: {
        type: String,
        enum: ["ongoing", "completed", "cancelled"],
        default: "ongoing",
        index: true
    },

    items: [
        {
            itemId: { type: String, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, default: 1 },
            addedAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        }
    ],

    totalAmount: {
        type: Number,
        default: 0
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

}, { timestamps: true });

// Indexes
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
