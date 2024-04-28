const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/product");

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const { name, price, img_url, description } = req.body;
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name,
      price,
      img_url,
      description,
    });
    const savedProduct = await product.save();
    res.status(201).json({
      message: "Product created",
      createdProduct: savedProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Product deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
