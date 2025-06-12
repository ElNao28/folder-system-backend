import fs from "fs";
import path from "path";

const createDirectoryToSave = (directory) => {
  try {
    const directoryPath = `./uploads/${directory}`;

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    return directoryPath;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const existFile = (directory, fileName) => {
  try {
    const fullPath = path.join("./uploads", directory, fileName);

    if (!fs.existsSync(fullPath)) return false;
    return true;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { createDirectoryToSave, existFile };
