import express from "express";
import data from "../data.js";
import newdata from "../newdata.js";
const productRouter = express.Router();
import expressAsyncHandler from "express-async-handler";
import {
  Bags,
  Mobiles,
  Laptops,
  Fashion,
} from "../mongo/models/productmodel.js";
productRouter.get(
  "/alldata",
  expressAsyncHandler((req, res) => {
    res.send(data);
  })
);
productRouter.get(
  "/bags",
  expressAsyncHandler(async (req, res) => {
    const bags = await Bags.find({});
    res.send(bags);
  })
);
productRouter.get(
  "/mobiles",
  expressAsyncHandler(async (req, res) => {
    const mobiles = await Mobiles.find({});
    res.send(mobiles);
  })
);
productRouter.get(
  "/computers",
  expressAsyncHandler(async (req, res) => {
    const laptop = await Laptops.find({});
    res.send(laptop);
  })
);
productRouter.get(
  "/clothes",
  expressAsyncHandler(async (req, res) => {
    const clothes = await Fashion.find({});
    res.send(clothes);
  })
);
export default productRouter;
