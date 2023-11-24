const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/users");
const bookRoutes = require("./routes/books");
require("./db");

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes;
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
