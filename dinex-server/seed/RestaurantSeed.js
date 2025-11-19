import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "../models/Restaurant.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Base 4 restaurants
const baseRestaurants = [
  {
    restaurantId: 1,
    name: "38 Barracks",
    cuisines: ["North Indian", "Biryani", "Chinese"],
    address: "Connaught Place, New Delhi",
    rating: 4.5,
    priceForTwo: 2000,
    contact: "9876543210",
    offer: 25,
  },
  {
    restaurantId: 2,
    name: "48 Barracks",
    cuisines: ["North Indian", "Mughlai"],
    address: "Rajouri Garden, New Delhi",
    rating: 4.4,
    priceForTwo: 1800,
    contact: "9123456780",
    offer: 10,
  },
  {
    restaurantId: 3,
    name: "58 Barracks",
    cuisines: ["Chinese", "Thai"],
    address: "Punjabi Bagh, New Delhi",
    rating: 4.3,
    priceForTwo: 2200,
    contact: "9988776655",
    offer: 40,
  },
  {
    restaurantId: 4,
    name: "68 Barracks",
    cuisines: ["Italian", "Continental"],
    address: "Saket, New Delhi",
    rating: 4.6,
    priceForTwo: 2400,
    contact: "9090909090",
    offer: 15,
  },
];

// Generate 26 more
const generatedRestaurants = Array.from({ length: 26 }).map((_, i) => ({
  restaurantId: i + 5,
  name: `Restaurant ${i + 5}`,
  cuisines: ["Indian", "Chinese", "Continental"],
  address: `Area ${i + 1}, New Delhi`,
  rating: Number((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
  priceForTwo: Math.floor(Math.random() * 1500 + 1000),
  contact: String(9000000000 + i),
  offer: [10, 15, 20, 25, 30, 40][Math.floor(Math.random() * 6)],
}));

const restaurants = [...baseRestaurants, ...generatedRestaurants];

async function seedRestaurants() {
  try {
    console.log("⏳ Connecting...");
    await mongoose.connect(MONGO_URI);

    console.log("🔥 Deleting old restaurants...");
    await Restaurant.deleteMany({});

    console.log("🍽 Inserting new restaurants...");
    const inserted = await Restaurant.insertMany(restaurants);

    console.log("🎉 DONE!");

    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

seedRestaurants();
