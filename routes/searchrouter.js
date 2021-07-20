import express from "express";

import expressAsyncHandler from "express-async-handler";
import {
  Bags,
  Fashion,
  Laptops,
  Mobiles,
  Search,
} from "../mongo/models/productmodel.js";

const searchRouter = express.Router();

// searchRouter.get(
//   "/search",
//   expressAsyncHandler(async (req, res) => {
//     const bags = await Bags.find({});
//     const mobiles = await Mobiles.find({});
//     const laptops = await Laptops.find({});
//     const clothes = await Fashion.find({});

//     const alldata = [...bags, ...mobiles, ...laptops, ...clothes];
//     const createdData = await Search.insertMany(alldata);
//     res.send({ createdData });
//   })
// );

searchRouter.get(
  "/search/:term",
  expressAsyncHandler(async (req, res) => {
    const regexp = new RegExp(req.params.term + "*", "i");

    Search.find({ $or: [{ productname: regexp }, { category: regexp }] }).then(
      (result) => res.status(200).json(result)
    );
  })
);

export default searchRouter;
