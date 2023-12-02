import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { dbConnect } from "./app/utils/dbConnect";

const app: Application = express();
// using cors
app.use(cors());

// parse data for using json
app.use(express.json());
// will accept only string and object
app.use(express.urlencoded({ extended: false }));

// db connection
dbConnect();

// import routers

// default routers

// custom route paths

export { app };
