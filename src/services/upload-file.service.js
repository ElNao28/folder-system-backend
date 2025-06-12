import fs from "fs";

const createDirectoryToSave = (directory) => {
  try {
    const directoryPath = `./uploads`;

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync("./uploads");
    }

    const path = `${directoryPath}/${directory}`;

    return path;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { createDirectoryToSave };
