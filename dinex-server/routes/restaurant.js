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
      page = 1,
      limit = 12,
    } = req.query;

    const query = {};

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { name: searchRegex },
        { address: searchRegex },
        { cuisines: searchRegex },
      ];
    }

    if (cuisines) {
      const cuisineArr = cuisines.split(",");
      query.cuisines = { $in: cuisineArr };
    }

    if (rating) {
      query.rating = { $gte: Number(rating) }; 
    }

    if (cost === "Low") {
      query.priceForTwo = { $lt: 800 };
    } else if (cost === "Medium") {
      query.priceForTwo = { $gte: 800, $lte: 1600 };
    } else if (cost === "High") {
      query.priceForTwo = { $gt: 1600 };
    }

    if (filters) {
      const f = filters.split(",");

      if (f.includes("Offers")) query.offer = { $gt: 0 };
      if (f.includes("Pet Friendly")) query.isPetFriendly = true;
      if (f.includes("Outdoor Seating")) query.hasOutdoorSeating = true;
      if (f.includes("Serves Alcohol")) query.servesAlcohol = true;
      if (f.includes("Open Now")) query.isOpenNow = true;
    }

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

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await Restaurant.countDocuments(query);

    const restaurants = await Restaurant.find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(limitNum);

    res.json({
      restaurants,
      pagination: {
        currentPage: pageNum,
        totalPages: Math.ceil(totalCount / limitNum),
        totalCount,
        limit: limitNum,
        hasNextPage: pageNum < Math.ceil(totalCount / limitNum),
        hasPrevPage: pageNum > 1
      }
    });

  } catch (err) {
    console.error("FILTER ERROR:", err);
    res.status(500).json({ msg: err.message });
  }
});

router.get("/:restaurantId", async (req, res) => {
  const { restaurantId } = req.params;

  const restaurant = await Restaurant.findOne({ restaurantId: Number(restaurantId) });

  if (!restaurant) {
    return res.status(404).json({ msg: "Restaurant not found" });
  }

  res.json(restaurant);
});

export default router;
