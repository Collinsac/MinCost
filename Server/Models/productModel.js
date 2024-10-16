import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  img: String,
  name: String,
  model: String,
  type: String,
  highlight: String,
});

const Product = mongoose.model("product", productSchema);

export default Product;
