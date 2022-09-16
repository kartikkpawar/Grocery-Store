const { Product, Category } = require("../models/product");

exports.allProducts = async (req, res) => {
  const allProducts = await Product.find(
    {},
    { createdAt: 0, updatedAt: 0, __v: 0 }
  );
  res.status(200).json({ data: allProducts });
};

exports.addProduct = async (req, res) => {
  const { name, price, quantity, category } = req.body;
  if (!name || !price || !quantity || !category) {
    return res.status(400).json({ err: "Fields missing" });
  }

  const product = await Product.findOne({ name });
  if (product) {
    return res.status(403).json({ err: "Product already added" });
  }
  const newProduct = await new Product(req.body);
  newProduct.save();

  return res.status(200).json({ msg: "Product added successfully" });
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;

  const productname = await Product.findOne({ name: req.body.name });

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).send({ err: "Product not found" });
  }

  Product.findByIdAndUpdate(
    productId,
    req.body,
    {
      new: true,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({ err: "Something went wrong" });
      }
      res.status(200).json({ msg: "Product updated successfully" });
    }
  );
};

// Category Controllers & Middlewares
exports.allCategories = async (req, res) => {
  const allCategories = await Category.find({}, { __v: 0 });
  res.status(200).json({ data: allCategories });
};

exports.addCategory = async (req, res) => {
  const { name } = req.body;

  const category = await Category.findOne({ name });
  if (category) {
    return res.status(403).json({ err: "Category already present" });
  }

  const newCategory = await new Category({ name });
  newCategory.save();

  return res.status(200).json({ msg: "Category added successfully" });
};

exports.isValidCategory = async (req, res, next) => {
  const { category } = req.body;
  const categoryPresent = await Category.findOne({ name: category });

  if (!categoryPresent) {
    return res
      .status(404)
      .send({ err: "Enter valid category from available list or add one" });
  }
  next();
};
