import { Router } from "express";
import { AllProducts } from "./product.controller";

const productRouter = Router();

productRouter.get("/", AllProducts);

export default productRouter;
