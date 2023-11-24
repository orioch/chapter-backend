const mongoose = require("mongoose");

const dbURI = `mongodb+srv://manu:${process.env.DB_PASSWORD}@cluster0.mpwyydx.mongodb.net/?retryWrites=true&w=majority`;

const options = {};

mongoose
  .connect(dbURI, options)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error", err));

module.exports = mongoose;
