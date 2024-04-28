const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();

const app = express();
const PORT = 8888;
const MONGO_URI = process.env.MONGO_DB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use("/products", routes);

app.get("/", (req, res) => {
  res.json({ message: "API works" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
