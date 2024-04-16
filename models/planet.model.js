const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    mass: {
      type: Number,
      required: [true, "Please enter mass"],
    },
    radius: {
      type: Number,
      required: [true, "Please enter radius"],
    },
    period: {
      type: Number,
      required: [true, "Please enter period"],
    },
    semi_major_axis: {
      type: Number,
      required: [true, "Please enter semi-major axis"],
    },
    temperature: {
      type: Number,
      required: [true, "Please enter temperature"],
    },
    distance_light_year: {
      type: Number,
      required: [true, "Please enter distance in light years"],
    },
    host_star_mass: {
      type: Number,
      required: [true, "Please enter host star mass"],
    },
    host_star_temperature: {
      type: Number,
      required: [true, "Please enter host star temperature"],
    },
    surface_area: {
      type: Number,
      required: [true, "Please enter surface area"],
    },
    Lots: {
      type: Number,
      required: [true, "Please enter lots"],
    },
    Prices: {
      type: Number,
      required: [true, "Please enter prices"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
