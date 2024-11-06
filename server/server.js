import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { message } from "./utils/custom/message.js";
import { dbConfig } from "./utils/dbConfig/dbConfig.js";
import { testRouter } from "./routes/test.route.js";
dotenv.config();

const port = process.env.PORT || 888;
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/health", (req, res) => {
  return res.send("<h1>App is healthy</h1>");
});
app.use("/api/test", testRouter);

app.listen(port, () => {
  dbConfig();
  message({
    color: "magenta",
    message: `Server is running on http://localhost:${port}`,
  });
});
