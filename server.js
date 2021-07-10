import express from "express";
import cors from "cors";
import productScreenRouter from "./routes/productscreenroute.js";
import rowsRouter from "./routes/rowsrouter.js";
import userRouter from "./routes/userRouter.js";
import mongoconnection from "./mongo/connection.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", productScreenRouter);
app.use("/api", rowsRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(" <h1>Server is Running </h1>");
  res.end();
});

app.listen(PORT, () => {
  console.log(`The server is runing`);
});
