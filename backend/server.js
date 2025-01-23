const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/categories");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.Console.log("DB error", err));

// Use toutes
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   time 2.21.29 blog web
