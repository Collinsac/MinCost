import Product from "../Models/productModel.js";

const createProduct = async (req, res) => {
  const { img, name, model, type, highlight } = req.body;
  try {
    const product = new Product({ img, name, model, type, highlight });
    await product.save();

    res.status(201).json({ msg: "Created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createProduct, getAllProduct, getAProduct };
