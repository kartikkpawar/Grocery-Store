const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
    orderTotal: {
      type: Number,
      default: 0,
    },
    paymentInfo: { type: String, enum: ["COD", "UPI", "CARD", "NA"] },
    paymentStatus: { type: String, enum: ["PAID", "UNPAID"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
