import express from "express";
import Booking from "../models/Booking.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

const checkAndUpdateStatus = async (booking) => {
    if (booking.status !== "confirmed") return booking;

    const now = new Date();
    const bookingDateTime = new Date(booking.date);

    console.log("Checking booking:", booking._id);
    console.log("Current time (UTC):", now.toISOString());
    console.log("Booking date (UTC):", bookingDateTime.toISOString());
    console.log("Booking time string (IST):", booking.time);

    const timeParts = booking.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (timeParts) {
        let hours = parseInt(timeParts[1]);
        const minutes = parseInt(timeParts[2]);
        const period = timeParts[3].toUpperCase();

        console.log("Parsed IST - hours:", hours, "minutes:", minutes, "period:", period);

        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;

        console.log("Adjusted IST hours:", hours);

        let utcHours = hours - 5;
        let utcMinutes = minutes - 30;

        if (utcMinutes < 0) {
            utcMinutes += 60;
            utcHours -= 1;
        }

        if (utcHours < 0) {
            utcHours += 24;
            bookingDateTime.setUTCDate(bookingDateTime.getUTCDate() - 1);
        }

        console.log("Converted to UTC - hours:", utcHours, "minutes:", utcMinutes);

        bookingDateTime.setUTCHours(utcHours, utcMinutes, 0, 0);
    }

    console.log("Final booking datetime (UTC):", bookingDateTime.toISOString());
    console.log("Current time (UTC):", now.toISOString());
    console.log("Is now > bookingDateTime?", now > bookingDateTime);

    if (now > bookingDateTime && booking.status === "confirmed") {
        console.log("✅ Updating booking status to completed");
        booking.status = "completed";
        await booking.save();
    }

    return booking;
};

const hasBookingTimePassed = (booking) => {
    const now = new Date();
    const bookingDateTime = new Date(booking.date);

    const timeParts = booking.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (timeParts) {
        let hours = parseInt(timeParts[1]);
        const minutes = parseInt(timeParts[2]);
        const period = timeParts[3].toUpperCase();

        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;

        let utcHours = hours - 5;
        let utcMinutes = minutes - 30;

        if (utcMinutes < 0) {
            utcMinutes += 60;
            utcHours -= 1;
        }

        if (utcHours < 0) {
            utcHours += 24;
            bookingDateTime.setUTCDate(bookingDateTime.getUTCDate() - 1);
        }

        bookingDateTime.setUTCHours(utcHours, utcMinutes, 0, 0);
    }

    return now > bookingDateTime;
};

router.post("/", authMiddleware, async (req, res) => {
    try {
        const {
            restaurantId,
            restaurantName,
            date,
            time,
            people,
            amount,
            offer,
            specialRequests,
            paymentMethod
        } = req.body;

        if (!restaurantId || !restaurantName || !date || !time || !people || !amount || !paymentMethod) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const newBooking = await Booking.create({
            userId: req.user.id,
            restaurantId,
            restaurantName,
            date,
            time,
            people,
            amount,
            offer,
            specialRequests,
            paymentMethod,
            status: "confirmed"
        });

        res.status(201).json({ msg: "Booking created successfully", booking: newBooking });
    } catch (err) {
        console.error("Error creating booking:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.get("/user/:userId", authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;

        if (req.user.id !== userId) {
            return res.status(403).json({ msg: "Access denied" });
        }

        let bookings = await Booking.find({ userId }).sort({ date: -1, createdAt: -1 });

        bookings = await Promise.all(bookings.map(booking => checkAndUpdateStatus(booking)));

        res.json({ bookings });
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        let booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ msg: "Booking not found" });
        }

        if (booking.userId.toString() !== req.user.id) {
            return res.status(403).json({ msg: "Access denied" });
        }

        booking = await checkAndUpdateStatus(booking);

        res.json({ booking });
    } catch (err) {
        console.error("Error fetching booking:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.patch("/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { people, date, time, specialRequests } = req.body;

        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ msg: "Booking not found" });
        }

        if (booking.userId.toString() !== req.user.id) {
            return res.status(403).json({ msg: "Access denied" });
        }

        if (hasBookingTimePassed(booking)) {
            return res.status(400).json({ msg: "Cannot update booking after the scheduled time" });
        }

        if (booking.status !== "confirmed") {
            return res.status(400).json({ msg: "Can only update confirmed bookings" });
        }

        if (people !== undefined) booking.people = people;
        if (date !== undefined) booking.date = date;
        if (time !== undefined) booking.time = time;
        if (specialRequests !== undefined) booking.specialRequests = specialRequests;

        await booking.save();

        res.json({ msg: "Booking updated successfully", booking });
    } catch (err) {
        console.error("Error updating booking:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.patch("/:id/cancel", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ msg: "Booking not found" });
        }

        if (booking.userId.toString() !== req.user.id) {
            return res.status(403).json({ msg: "Access denied" });
        }

        if (hasBookingTimePassed(booking)) {
            return res.status(400).json({ msg: "Cannot cancel booking after the scheduled time" });
        }

        if (booking.status !== "confirmed") {
            return res.status(400).json({ msg: "Can only cancel confirmed bookings" });
        }

        booking.status = "cancelled";
        await booking.save();

        res.json({ msg: "Booking cancelled successfully", booking });
    } catch (err) {
        console.error("Error cancelling booking:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ msg: "Booking not found" });
        }

        if (booking.userId.toString() !== req.user.id) {
            return res.status(403).json({ msg: "Access denied" });
        }

        if (booking.status !== "cancelled") {
            return res.status(400).json({ msg: "Can only delete cancelled bookings" });
        }

        await Booking.findByIdAndDelete(id);

        res.json({ msg: "Booking deleted successfully" });
    } catch (err) {
        console.error("Error deleting booking:", err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

export default router;
