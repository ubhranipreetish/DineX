import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    cuisines: {
      type: [String],  
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

    contact: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, 
    },

    offer: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    }

});

export default mongoose.model("Restaurant", restaurantSchema);
