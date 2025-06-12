import fs from "fs";
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

export { createDirectoryToSave };
