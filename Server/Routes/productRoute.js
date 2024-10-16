import express from "express";
import {
  createProduct,
  getAProduct,
  getAllProduct,
} from "../Controllers/productControllers.js";

const Route = express.Router();

Route.post("/", createProduct);
Route.get("/", getAllProduct);
Route.get("/:id", getAProduct);

export default Route;
