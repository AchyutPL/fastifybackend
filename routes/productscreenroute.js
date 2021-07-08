import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  Bags,
  Mobiles,
  Laptops,
  Fashion,
} from "../mongo/models/productmodel.js";
const productScreenRouter = express.Router();

productScreenRouter.get(
  "/product/:id",
  expressAsyncHandler(async (req, res) => {
    const bags = await Bags.find({});
    const mobiles = await Mobiles.find({});
    const laptops = await Laptops.find({});
    const clothes = await Fashion.find({});

    const alldata = [...bags, ...mobiles, ...laptops, ...clothes];

    const product = alldata.find(
      (x) => String(x._id) === String(req.params.id)
    );
    if (product) {
      res.send(product);
    } else {
      res.send("Sorry product is not available");
    }
  })
);

export default productScreenRouter;
