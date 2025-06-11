import "dotenv/config";
import express from "express";
import folderRoutes from "./routes/folder.route.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello world!!" });
});
app.use("/folders", folderRoutes);

export default app;
