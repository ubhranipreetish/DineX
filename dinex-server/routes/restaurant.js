import express from "express";
import Restaurant from "../models/Restaurant.js";

const router = express.Router();

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
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
