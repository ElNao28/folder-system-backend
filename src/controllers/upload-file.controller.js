import fs from "fs";
import {
  createDirectoryToSave,
  existFile,
} from "../services/upload-file.service.js";
import path from "path";

const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (file.mimetype !== "application/pdf") {
      return res.status(500).json({
        message: "File isn't PDF",
        status: 500,
      });
    }

    const fullPath = path.join(
      createDirectoryToSave("folder"),
      file.originalname
    );

    fs.writeFileSync(fullPath, file.buffer);
    return res.status(200).json({
      message: "File upload",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getFileByPath = (req, res) => {
  try {
    const { fileName, directory } = req.params;

    if (!existFile(directory, fileName)) {
      return res.status(404).json({
        message: "File not found",
        status: 404,
      });
    }
    const fullPath = path.join(process.cwd(), "uploads", directory, fileName);
    return res.status(200).sendFile(fullPath);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { uploadFile, getFileByPath };
