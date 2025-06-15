const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  detail: String,
  image: String,
  Price: String,
  Brand: String,
  about: [String],
  banner: String,
});

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  data: [productSchema],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
