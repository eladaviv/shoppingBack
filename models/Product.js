const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({

  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  imagePath2: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
