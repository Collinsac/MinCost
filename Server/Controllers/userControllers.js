import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const genJWT = (id, name, email, isAdmin) => {
  const Token = jwt.sign({ id, name, email, isAdmin }, process.env.Jwtsecret, {
    expiresIn: "30d",
  });
  return Token;
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      res.status(400).json({ msg: "User already exist!!" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();

      const Token = genJWT(user._id, user.name, user.email, user.isAdmin);
      res.cookie("mincost", Token);
      res.status(201).json({ msg: "Registered Successful" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      const isvalid = await bcrypt.compare(password, existUser.password);

      if (isvalid) {
        const Token = genJWT(
          existUser._id,
          existUser.name,
          existUser.email,
          existUser.isAdmin
        );
        res.cookie("mincost", Token);
        res.status(200).json({
          msg: "Login Successful",
          data: { name: existUser.name, email: existUser.email },
        });
      } else {
        res.status(400).json({ msg: "invalid email or password" });
      }
    } else {
      res.status(400).json({ msg: "invalid email or password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const decode = jwt.decode(req.cookies.mincost);
  try {
    if (decode.isAdmin || decode.id === id) {
      const user = await UserModel.findById(id);
      user
        ? res.status(200).json(user)
        : res.status(404).json({ msg: "User not found !!" });
    } else {
      res
        .status(401)
        .json({ msg: "You are not authorized to access this user" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createUser, authUser,getUser };
