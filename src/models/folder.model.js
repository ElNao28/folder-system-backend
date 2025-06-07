import { Sequelize } from "sequelize";
import sequelize from "../database/connection-bd.js";

const FolderModel = sequelize.define(
  "folder",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    path: Sequelize.STRING,
    idFather: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "folder",
  }
);

FolderModel.hasMany(FolderModel, {
  foreignKey: "idFather",
  as: "childrenFolders",
});

FolderModel.belongsTo(FolderModel, {
  foreignKey: "idFather",
  as: "parentFolder",
});

export default FolderModel;
