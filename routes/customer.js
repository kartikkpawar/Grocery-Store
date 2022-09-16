const express = require("express");
const router = express.Router();
const { allCustomers, createCustomer } = require("../controllers/customer");

router.get("/allCustomers", allCustomers);
router.post("/createCustomer", createCustomer);

module.exports = router;
