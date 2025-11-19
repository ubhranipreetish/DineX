import mongoose from "mongoose";
import Restaurant from "../models/Restaurant.js";
import dotenv from "dotenv";
dotenv.config();


const MONGO_URI = process.env.MONGO_URI;

const restaurants = [
  {
    name: "38 Barracks",
    cuisines: ["North Indian", "Biryani", "Chinese"],
    address: "Connaught Place, New Delhi",
    rating: 4.5,
    priceForTwo: 2000,
    contact: "9876543210",
    offer: 25,
  },
  {
    name: "48 Barracks",
    cuisines: ["North Indian", "Mughlai"],
    address: "Rajouri Garden, New Delhi",
    rating: 4.4,
    priceForTwo: 1800,
    contact: "9123456780",
    offer: 10,
  },
  {
    name: "58 Barracks",
    cuisines: ["Chinese", "Thai"],
    address: "Punjabi Bagh, New Delhi",
    rating: 4.3,
    priceForTwo: 2200,
    contact: "9988776655",
    offer: 40,
  },
  {
    name: "68 Barracks",
    cuisines: ["Italian", "Continental"],
    address: "Saket, New Delhi",
    rating: 4.6,
    priceForTwo: 2400,
    contact: "9090909090",
    offer: 15,
  },

  // ⭐ Auto-generate remaining 26 restaurants
  ...Array.from({ length: 26 }).map((_, i) => ({
    name: `Restaurant ${i + 5}`,
    cuisines: ["Indian", "Chinese", "Continental"],
    address: `Area ${i + 1}, New Delhi`,
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1), // between 3.5–5
    priceForTwo: Math.floor(Math.random() * 1500 + 1000), // 1000–2500
    contact: `${9000000000 + i}`, // unique 10-digit number
    offer: [10, 15, 20, 25, 30, 40][Math.floor(Math.random() * 6)], // random offer
  })),
];

async function seedRestaurants() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);

    console.log("🔥 Clearing old data...");
    await Restaurant.deleteMany({});

    console.log("🍽️ Inserting new restaurants...");
    await Restaurant.insertMany(restaurants);

    console.log("✅ Successfully seeded 30 restaurants!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding restaurants:", err);
    process.exit(1);
  }
}

seedRestaurants();
