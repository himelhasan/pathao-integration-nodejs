import { IProduct } from "./product.interface";
import productModel from "./product.model";

export const getAllProductsFromDB = async (): Promise<IProduct[]> => {
  const allProducts = await productModel.find();
  return allProducts;
};

// 1:27:11
