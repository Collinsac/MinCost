import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// import routes
import userRoutes from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";

// initialzing app
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const Port = process.env.PORT || 5000;
const DB_Url = process.env.DB_URL;
let server = null;

// connecting to database
mongoose
  .connect(DB_Url)
  .then(() => {
    server = app.listen(Port, () =>
      console.log(`server running on http://localhost:${Port}`)
    );
  })
  .catch((error) => console.log(error));

const io = new Server(server);

app.get("/", (req, res) => res.send("Hello from API"));

app.use("/user", userRoutes);
app.use("/product", productRoute);
