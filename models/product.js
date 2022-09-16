const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: { type: String, required: true },
  },
  { timestamps: true }
);
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = { Product, Category };
