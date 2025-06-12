import fs from "fs";
import { createDirectoryToSave } from "../services/upload-file.service.js";

const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (file.mimetype !== "application/pdf") {
      return res.status(500).json({
        message: "File isn't PDF",
        status: 500,
      });
    }

    fs.writeFileSync(
      createDirectoryToSave("folder") + file.originalname,
      file.buffer
    );
    return res.status(200).json({
      message: "File upload",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { uploadFile };
