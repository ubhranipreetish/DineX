import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true },
    status: { type: String, enum: ["free", "occupied"], default: "free" },
    currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: "Order", default: null },
    currentBill: { type: Number, default: 0 },
}, { _id: false });

const RestaurantOwnerSchema = new mongoose.Schema({
    // OWNER DETAILS
    owner: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
    },

    // RESTAURANT DETAILS
    restaurant: {
        name: { type: String, required: true },
        type: {
            type: String,
            required: true,
            enum: ["Cafe", "Fine Dining", "Casual Dining", "Bar", "Bakery", "Restaurant"],
        },
        address: {
            full: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true },
        },
        totalTables: { type: Number, required: true },
    },

    // TABLE MANAGEMENT
    tables: {
        type: [TableSchema],
        default: []
    },

    // STAFF MANAGEMENT
    waiters: [
        {
            name: { type: String, required: true },
            phone: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            role: {
                type: String,
                enum: ["waiter", "manager", "chef", "bartender"],
                default: "waiter",
            },
            isActive: { type: Boolean, default: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],

}, { timestamps: true });

export default mongoose.model("RestaurantOwner", RestaurantOwnerSchema);
