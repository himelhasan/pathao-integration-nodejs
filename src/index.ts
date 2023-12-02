import { app } from "./app";
import { log } from "./app/utils/logger";

const { PORT } = process.env;

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      log.info(` Server is running at ${PORT}`);
    });
  } catch (error: any) {
    log.error(error.message);
  }
};
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
