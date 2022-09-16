require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Database connection
require("./config/database").connect();

// Middlewares
app.use(express.json());

// Routes
app.use("/api", require("./routes/customer"));
app.use("/api", require("./routes/products"));
app.use("/api", require("./routes/orders"));

app.listen(PORT, () => console.log("Server running on port ", PORT));
