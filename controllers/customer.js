const Customer = require("../models/customer");

exports.allCustomers = async (req, res) => {
  const allCustomers = await Customer.find(
    {},
    { __v: 0, createdAt: 0, updatedAt: 0 }
  );
  res.status(200).json({ data: allCustomers });
};

exports.createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ err: "Fields missing" });
  }

  const customer = await Customer.findOne({ phone });
  if (customer) {
    return res.status(403).json({ err: "User already exists" });
  }
  const newCustomer = await new Customer(req.body);
  newCustomer.save();

  return res.status(200).json({ msg: "User created successfully" });
};
