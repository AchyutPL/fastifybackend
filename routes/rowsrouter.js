import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  Bags,
  Mobiles,
  Laptops,
  Fashion,
} from "../mongo/models/productmodel.js";
const rowsRouter = express.Router();

rowsRouter.get(
  "/dataforrows",
  expressAsyncHandler(async (req, res) => {
    const bags = await Bags.find({});
    const mobiles = await Mobiles.find({});
    const laptops = await Laptops.find({});
    const clothes = await Fashion.find({});

    const allrowdata = {
      bags: bags,
      mobiles: mobiles,
      laptops: laptops,
      clothes: clothes,
    };
    res.send(allrowdata);
  })
);

export default rowsRouter;
