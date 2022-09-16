const express = require("express");
const {
  addToCart,
  checkCart,
  placeOrder,
  placeSingleOrder,
} = require("../controllers/orders");
const router = express.Router();

router.post(
  "/placeSingleOrder/:customerId/:productId/:quantity",
  placeSingleOrder
);
router.patch(
  "/addToCart/:customerId/:productId/:quantity",
  checkCart,
  addToCart
);
router.patch("/placeOrder/:customerId/:cartId", placeOrder);

module.exports = router;
