import FolderModel from "../models/folder.model.js";

const getfathersFolder = async (req, res) => {
  try {
    const folders = await FolderModel.findAll({
      where: {
        isfather: true,
      },
    });
    return res.status(200).json(folders);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
};

const createFolder = async (req, res) => {
  try {
    const { isfather, idFather, ...dataNewFolder } = req.body;

    const newFolder = await FolderModel.create({ ...dataNewFolder });

    if (!isfather) {
      addChildrenFolderToArray(newFolder, idFather);
    }
    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
};

const addChildrenFolderToArray = async (newFolder, idFather) => {
  try {
    const parentFolder = await FolderModel.findByPk(idFather);
    if (!parentFolder) {
      throw new Error("Folder not found");
    }
    parentFolder.childrens = [...parentFolder.childrens, newFolder.id];
    await parentFolder.save();
  } catch (error) {
    console.error(error);
    throw new Error("Error creating children folder");
  }
};

const getChildrensByFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await FolderModel.findByPk(id);

    const dataChildrens = await Promise.all(
      folder.childrens.map(async (childId) => {
        const child = await FolderModel.findByPk(childId);
        return {
          id: child.id,
          name: child.name,
          path: child.path,
          isFather: child.isfather,
        };
      })
    );
    res.status(200).json(dataChildrens);
  } catch (error) {}
};

export { getfathersFolder, createFolder, getChildrensByFolder };
