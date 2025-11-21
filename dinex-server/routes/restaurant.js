import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const {
      search,
      cuisines,
      rating,
      cost,
      sort,
      filters,
    } = req.query;

    const query = {};

    // 🔎 SEARCH
    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { name: searchRegex },
        { address: searchRegex },
        { cuisines: searchRegex },
      ];
    }

    // 🍽 MULTIPLE CUISINES
    if (cuisines) {
      const cuisineArr = cuisines.split(","); // example : "Italian,Chinese"
      query.cuisines = { $in: cuisineArr };
    }

    // ⭐ RATING FILTER
    if (rating) {
      query.rating = { $gte: Number(rating) }; // 4 => 4+
    }

    // 💰 COST FILTER
    if (cost === "Low") {
      query.priceForTwo = { $lt: 800 };
    } else if (cost === "Medium") {
      query.priceForTwo = { $gte: 800, $lte: 1600 };
    } else if (cost === "High") {
      query.priceForTwo = { $gt: 1600 };
    }

    // 🎛 FEATURE FILTERS
    /*
      filters = "Offers,Pet Friendly,Outdoor Seating"
    */
    if (filters) {
      const f = filters.split(",");

      if (f.includes("Offers")) query.offer = { $gt: 0 };
      if (f.includes("Pet Friendly")) query.isPetFriendly = true;
      if (f.includes("Outdoor Seating")) query.outdoorSeating = true;
      if (f.includes("Serves Alcohol")) query.servesAlcohol = true;
      if (f.includes("Open Now")) query.isOpen = true;
    }

    // 🔽 SORTING
    let sortQuery = {};

    switch (sort) {
      case "Popularity":
        sortQuery = { popularity: -1 };
        break;
      case "Rating: Low to High":
        sortQuery = { rating: 1 };
        break;
      case "Rating: High to Low":
        sortQuery = { rating: -1 };
        break;
      case "Cost: Low to High":
        sortQuery = { priceForTwo: 1 };
        break;
      case "Cost: High to Low":
        sortQuery = { priceForTwo: -1 };
        break;
      default:
        sortQuery = {};
    }

    const restaurants = await Restaurant.find(query)
      .sort(sortQuery)

    res.json(restaurants);

  } catch (err) {
    console.error("FILTER ERROR:", err);
    res.status(500).json({ msg: err.message });
  }
});

// GET restaurant by restaurantId (not _id)
router.get("/:restaurantId", async (req, res) => {
    const { restaurantId } = req.params;
  
    const restaurant = await Restaurant.findOne({ restaurantId: Number(restaurantId) });
  
    if (!restaurant) {
      return res.status(404).json({ msg: "Restaurant not found" });
    }
  
    res.json(restaurant);
  });

export default router;
