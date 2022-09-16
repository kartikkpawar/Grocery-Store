const express = require("express");
const {
  addToCart,
  checkCart,
  placeOrder,
  getOrderForYear,
} = require("../controllers/orders");
const router = express.Router();

// router.get("/myOrders/:custId", allProducts);
router.patch(
  "/addToCart/:customerId/:productId/:quantity",
  checkCart,
  addToCart
);
router.patch("/placeOrder/:customerId/:cartId", placeOrder);

module.exports = router;
