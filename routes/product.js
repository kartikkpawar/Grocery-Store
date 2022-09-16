const express = require("express");
const router = express.Router();
const {
  allProducts,
  addProduct,
  isValidCategory,
  allCategories,
  addCategory,
  updateProduct,
} = require("../controllers/product");

router.get("/allProducts", allProducts);
router.post("/addProduct", isValidCategory, addProduct);
router.patch("/updateProduct/:productId", isValidCategory, updateProduct);

// Category

router.get("/allCategories", allCategories);
router.post("/addcategory", addCategory);

module.exports = router;
