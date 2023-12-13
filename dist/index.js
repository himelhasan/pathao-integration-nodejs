"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const logger_1 = require("./app/utils/logger");
const { PORT } = process.env;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app_1.app.listen(PORT, () => {
            logger_1.log.info(` Server is running at ${PORT}`);
        });
    }
    catch (error) {
        logger_1.log.error(error.message);
    }
});
startServer();
// //
// const URI = process.env.URI;
// const port = process.env.PORT || 5000;
// // database connection
// const dbConnect = async (): Promise<void> => {
//   if (!URI) {
//     throw new Error("URI is required");
//   }
//   await mongoose.connect(URI).then(() => console.log("database connected"));
//   const database = mongoose.connection;
//   //collection name
//   const usersCollection = database.collection("users");
//   app.get("/persons", async (req, res) => {
//     const result = await usersCollection.find({}).limit(10).toArray();
//     res.send(result);
//   });
// };
// dbConnect();
// app.get("/", (req, res) => {
//   res.send({
//     message: `our server is running on  ${port}`,
//     status: 200,
//   });
// });
// app.listen(port, () => console.log("listening on port " + port));
