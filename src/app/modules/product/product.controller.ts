import { NextFunction, Request, Response } from "express";
import { getAllProductsFromDB } from "./product.service";
import { log } from "../../utils/logger";

export const AllProducts = async (req: Request, res: Response, next: NextFunction) => {
  const products = await getAllProductsFromDB();
  console.log(products);
  res.status(200).json({
    status: "success",
    data: products,
  });
};
