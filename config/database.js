const mongoose = require("mongoose");

require("dotenv").config();
const { MONGO_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database Connected Successfully"))
    .catch((err) => {
      console.log(`DB Connection failed`);
      console.log(err);
      process.exit(1);
    });
};
