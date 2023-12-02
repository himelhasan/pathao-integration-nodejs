import mongoose from "mongoose";
import { log } from "./logger";

const { URI } = process.env;
const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      log.error("NO URI FOUND IN THE environment");
      process.exit(1);
    }
    await mongoose.connect(URI);
    log.info("DB Connected");
  } catch (error: any) {
    log.error(error.message);
  }
};

export { dbConnect };
