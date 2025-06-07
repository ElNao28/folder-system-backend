import FolderModel from "../models/folder.model.js";

const getfathersFolder = async (req, res) => {
  try {
    const folders = await FolderModel.findAll({
      where: {
        idFather: null,
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
    const dataFolder = req.body;

    const newFolder = await FolderModel.create(dataFolder);
    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
};

const getChildrensByFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const childrens = await FolderModel.findAll({
      where: {
        idFather: id,
      },
    });
    res.status(200).json(childrens);
  } catch (error) {}
};

export { getfathersFolder, createFolder, getChildrensByFolder };
