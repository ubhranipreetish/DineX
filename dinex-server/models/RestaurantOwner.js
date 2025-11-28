import mongoose from "mongoose";

const RestaurantOwnerSchema = new mongoose.Schema({
    // ================================
    // OWNER DETAILS
    // ================================
    owner: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true }, // hashed before save
    },

    // ================================
    // RESTAURANT DETAILS (MINIMAL)
    // ================================
    restaurant: {
        name: { type: String, required: true },
        type: {
            type: String,
            required: true,
            enum: ["Cafe", "Fine Dining", "Casual Dining", "Bar", "Bakery", "Restaurant"]
        },
        address: {
            full: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true },
        },
        totalTables: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },

    // ================================
    // WAITER / STAFF MANAGEMENT
    // ================================
    waiters: [
        {
            name: { type: String, required: true },
            phone: { type: String, required: true },
            password: { type: String, required: true }, // hashed PIN or password
            role: { type: String, enum: ["waiter", "manager"], default: "waiter" },
            isActive: { type: Boolean, default: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true }); // Enable automatic timestamps

export default mongoose.model("RestaurantOwner", RestaurantOwnerSchema);
