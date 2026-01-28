const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/recipes", require("./routes/recipe.routes"));

// test route
app.get("/", (req, res) => {
  res.send("Recipes API is running successfully");
});

module.exports = app;
