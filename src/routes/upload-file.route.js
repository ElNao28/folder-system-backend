import { Router } from "express";
import { uploadFile } from "../controllers/upload-file.controller.js";
import multer, { memoryStorage } from "multer";

const upload = multer({ storage: memoryStorage() });

const router = Router();

router.post("/file", upload.single("file"), uploadFile);

export default router;
