import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    restaurantId: {
        type: Number,
        required: true,
        index: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    people: {
        type: Number,
        required: true,
        min: 1,
        max: 12
    },
    amount: {
        type: Number,
        required: true
    },
    offer: {
        title: String,
        desc: String,
        sub: String
    },
    specialRequests: {
        type: String,
        default: ""
    },
    paymentMethod: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["confirmed", "completed", "cancelled"],
        default: "confirmed"
    }
}, {
    timestamps: true
});

// Compound index for efficient queries
bookingSchema.index({ userId: 1, status: 1 });

export default mongoose.model("Booking", bookingSchema);
