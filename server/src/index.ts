import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./router";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "hello from the root route" });
});

app.use("/api", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.name, err.message);
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
