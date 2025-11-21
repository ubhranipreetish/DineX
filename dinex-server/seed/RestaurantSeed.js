import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "../models/Restaurant.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const cuisinesList = [
  "Italian",
  "North Indian",
  "Chinese",
  "Mexican",
  "Thai",
  "Japanese",
  "American",
];

function randomCuisine() {
  const set = new Set();
  while (set.size < 3) {
    set.add(cuisinesList[Math.floor(Math.random() * cuisinesList.length)]);
  }
  return [...set];
}

function randomCostCategory(price) {
  if (price < 800) return "Low";
  if (price < 1600) return "Medium";
  return "High";
}

const restaurantNames = [
  ["Olive Bar & Kitchen", "Mehrauli, New Delhi"],
  ["Cafe Tesu", "Essex Farms, New Delhi"],
  ["The Grammar Room", "Mehrauli, New Delhi"],
  ["Diggin Cafe", "Chanakyapuri, New Delhi"],
  ["Rustique", "Chanakyapuri, New Delhi"],
  ["Big Chill Cafe", "Khan Market, New Delhi"],
  ["Fig & Maple", "Greater Kailash, New Delhi"],
  ["Perch Wine & Coffee Bar", "Vasant Vihar, New Delhi"],
  ["Cafe Delhi Heights", "Rajouri Garden, New Delhi"],
  ["SodaBottleOpenerWala", "Khan Market, New Delhi"],
  ["Bo-Tai", "Mehrauli, New Delhi"],
  ["Yeti - Himalayan Kitchen", "Hauz Khas, New Delhi"],
  ["AMA Cafe", "Majnu Ka Tila, New Delhi"],
  ["Colocal Cafe", "Khan Market, New Delhi"],
  ["Andaz Delhi", "Aerocity, New Delhi"],
  ["AnnaMaya", "Aerocity, New Delhi"],
  ["The Piano Man", "Safdarjung Enclave, New Delhi"],
  ["The Oberoi 360°", "Golf Links, New Delhi"],
  ["Hello Panda", "Pacific Mall, New Delhi"],
  ["Plum by Bent Chair", "Aerocity, New Delhi"],
  ["The Irish House", "Noida Sector 18"],
  ["Sly Granny", "Khan Market, New Delhi"],
  ["The Big Tree Cafe", "South Point Mall, Gurugram"],
  ["The Yellow Chilli", "Rajouri Garden, New Delhi"],
  ["Miso Sexy", "Hauz Khas, New Delhi"],
  ["Blanchette", "Connaught Place, New Delhi"],
  ["Cafe Dori", "Chattarpur, New Delhi"],
  ["Rooh", "Mehrauli, New Delhi"],
  ["Café Wink", "Anand Vihar, New Delhi"],
  ["The Belgian Waffle Co.", "Lajpat Nagar, New Delhi"],
  ["Baked Love", "Saket, New Delhi"],
  ["The Sky High", "Ansall Plaza, New Delhi"],
  ["The Bar Cat", "South Extension, New Delhi"],
  ["Social Offline", "Hauz Khas Village, New Delhi"],
  ["Imperfecto Ruin Pub", "Logix Mall, Noida"],
  ["Foxtrot", "Khan Market, New Delhi"],
  ["The Beer Cafe", "Connaught Place, New Delhi"],
  ["IHOP", "Cyberhub, Gurugram"],
  ["Burma Burma", "Select Citywalk, New Delhi"],
  ["Kake Da Hotel", "Connaught Place, New Delhi"],
  ["Farzi Cafe", "Connaught Place, New Delhi"],
  ["The Potbelly Rooftop", "Shahpur Jat, New Delhi"],
  ["Café Hawkers", "Connaught Place, New Delhi"],
  ["Pings Cafe Orient", "Lodhi Colony, New Delhi"],
  ["Indian Accent", "The Lodhi, New Delhi"],
];

const restaurants = restaurantNames.map((r, i) => {
  const price = Math.floor(Math.random() * 2500 + 500); 
  return {
    restaurantId: i + 1,
    name: r[0],
    address: r[1],
    cuisines: randomCuisine(),
    rating: Number((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
    priceForTwo: price,
    contact: String(9000000000 + i),
    offer: [10, 15, 20, 25, 30, 40][Math.floor(Math.random() * 6)],

    isPetFriendly: Math.random() < 0.4,          
    hasOutdoorSeating: Math.random() < 0.7,      
    servesAlcohol: Math.random() < 0.7,          
    isOpenNow: Math.random() < 0.9,              

    costCategory: randomCostCategory(price),
    popularity: Math.floor(Math.random() * 5000),

  };
});



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
