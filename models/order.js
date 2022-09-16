const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    order: { type: Date, default: Date() },
    total: {
      type: Number,
      default: 0,
    },
    paymentInfo: {
      type: String,
      enum: ["COD", "UPI", "CARD", "NA"],
      default: "NA",
    },
    customerId: String,
    type: { type: String, enum: ["ORDER", "CART"], default: "CART" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
