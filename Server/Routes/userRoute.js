import express from "express";
import {
  authUser,
  createUser,
  getUser,
} from "../Controllers/userControllers.js";

const Route = express.Router();

Route.post("/", createUser);
Route.post("/login", authUser);
Route.get("/me", getUser);

export default Route;
