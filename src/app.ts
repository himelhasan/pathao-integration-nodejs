import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnect } from "./app/utils/dbConnect";
import productRouter from "./app/modules/product/product.router";

const app: Application = express();
// using cors
app.use(cors());

// parse data for using json
app.use(express.json());
// will accept only string and object
app.use(express.urlencoded({ extended: false }));

// render ejs
app.set("view engine", "ejs");

// db connection
dbConnect();

// import routers
// default routers
app.get("/", (req, res) => {
  res.send("Welcome to the pathao home server  ");
});

// custom route paths
app.use("/api/v1/products", productRouter);

export { app };
