const Order = require("../models/order");
const { Product } = require("../models/product");
const Customer = require("../models/customer");

exports.checkCart = async (req, res, next) => {
  const { customerId } = req.params;
  const cart = await Order.findOne({ customerId, type: "CART" });

  if (!cart) {
    const newCart = new Order({ customerId });
    req.cartId = newCart._id;
    await newCart.save();
    return next();
  }
  req.cartId = cart._id;
  next();
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.params;
  const { cartId } = req;
  const product = await Product.findById(productId);
  Order.findByIdAndUpdate(
    cartId,
    {
      $push: { products: { product: productId, quantity } },
      $inc: { total: product.price * quantity },
      $set: { order: Date() },
    },
    {
      new: true,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({ err: "Something went wrong" });
      }
      res.status(200).json({ msg: "Added to cart", cartId: data._id });
    }
  );
};

exports.placeOrder = (req, res) => {
  const { cartId, customerId } = req.params;
  const { paymentInfo } = req.body;
  Order.findOneAndUpdate(
    { _id: cartId, customerId, type: "CART" },
    {
      $set: { type: "ORDER", paymentInfo: paymentInfo, order: Date() },
    },
    { new: true },
    async (err, data) => {
      if (err) {
        return res.status(400).json({ err: "Something went wrong" });
      }

      res.status(200).json({ msg: "Order placed successfully" });
    }
  );
};

exports.maxOrderInYear = async (req, res, next) => {
  const { customerId } = req.params;
  const date = new Date();

  const orders = await Order.find({
    customerId,
    type: "ORDER",
    order: { $gte: new Date(`${date.getFullYear()}-01-01`), $lt: Date() },
  });

  req.maxOrderInYear = orders.length;
  next();
};
exports.customerOrders = async (req, res, next) => {
  const { customerId } = req.params;

  const orders = await Order.find({ customerId, type: "ORDER" }).populate(
    "products.product",
    "name category"
  );
  req.customerOrder = orders;
  next();
};
