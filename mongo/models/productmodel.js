import mongoose from "mongoose";

const bagSchema = new mongoose.Schema(
  {
    productname: { type: String },
    price: { type: Number },
    path: { type: String },
    countinstock: { type: Number },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);
const mobileSchema = new mongoose.Schema(
  {
    productname: { type: String },
    price: { type: Number },
    path: { type: String },
    countinstock: { type: Number },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);
const laptopSchema = new mongoose.Schema(
  {
    productname: { type: String },
    price: { type: Number },
    path: { type: String },
    countinstock: { type: Number },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);
const fashionSchema = new mongoose.Schema(
  {
    productname: { type: String },
    price: { type: Number },
    path: { type: String },
    countinstock: { type: Number },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Bags = mongoose.model("Bags", bagSchema);
export const Mobiles = mongoose.model("Mobiles", mobileSchema);
export const Laptops = mongoose.model("Laptops", laptopSchema);
export const Fashion = mongoose.model("Fashion", fashionSchema);
