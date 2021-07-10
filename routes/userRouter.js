import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../mongo/models/usermodel.js";
const userRouter = express.Router();
import { generateToken } from "../utils.js";

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).send({
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          contact: user.contact,
          token: generateToken(user),
        });
        return;
      }
    } else {
      res.status(401).send({ message: "Invalid Username or Password" });
    }
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const ouruser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      contact: req.body.contact,
      address: req.body.address,
    });
    const createduser = await ouruser.save();
    res.send("Registered");
  })
);

export default userRouter;
