const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const customerSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    orders: [
      {
        type: ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
