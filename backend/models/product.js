const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  img_url: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
