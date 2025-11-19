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

export default router;
