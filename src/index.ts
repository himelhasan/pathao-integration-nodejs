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
