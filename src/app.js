import "dotenv/config";
import express from "express";
import folderRoutes from "./routes/folder.route.js";
import uploadFiles from "./routes/upload-file.route.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello world!!" });
});
app.use("/folders", folderRoutes);

app.use("/upload", uploadFiles);

export default app;
