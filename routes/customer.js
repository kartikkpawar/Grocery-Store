const express = require("express");
const router = express.Router();
const {
  allCustomers,
  createCustomer,
  customerInfo,
} = require("../controllers/customer");
const { maxOrderInYear, customerOrders } = require("../controllers/orders");

router.get("/allCustomers", allCustomers);
router.post("/createCustomer", createCustomer);
router.get(
  "/getCustomer/:customerId",
  maxOrderInYear,
  customerOrders,
  customerInfo
);

module.exports = router;
