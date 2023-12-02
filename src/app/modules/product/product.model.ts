import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true, trim: true, maxlength: 200 },
    price: { type: Number, required: true, default: 0 },
    sku: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProduct>("Product", productSchema);
