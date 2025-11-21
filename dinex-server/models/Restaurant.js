import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  restaurantId: {
    type: Number,
    required: true,
    unique: true,
  },

  name: { type: String, required: true },

  cuisines: {
    type: [String],
    enum: [
      "Italian",
      "North Indian",
      "Chinese",
      "Mexican",
      "Thai",
      "Japanese",
      "American",
    ],
    required: true,
  },

  address: { type: String, required: true },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },

  priceForTwo: {
    type: Number,
    required: true,
  },

  costCategory: {
    type: String,
    enum: ["Low", "Medium", "High"],  
    required: true,
  },

  contact: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },

  offer: {
    type: Number,
    required: false,
    min: 1,
    max: 100,
  },

  isPetFriendly: { type: Boolean, default: false },
  hasOutdoorSeating: { type: Boolean, default: true },
  servesAlcohol: { type: Boolean, default: true },
  isOpenNow: { type: Boolean, default: true },


  popularity: { type: Number, default: 0 },

});

export default mongoose.model("Restaurant", restaurantSchema);
