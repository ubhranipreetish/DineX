import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import restaurantRoutes from "./routes/restaurant.js";
import bookingRoutes from "./routes/booking.js";
import businessAuthRoutes from "./routes/businessAuth.js";
import businessDashboardRoutes from "./routes/businessDashboard.js";

dotenv.config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(cors({
  origin: "*", // (for testing; later restrict to your frontend domain)
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/business", businessAuthRoutes);
app.use("/api/business", businessDashboardRoutes);
app.get("/", (req, res) => res.send("DineX Backend Running ✅"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
