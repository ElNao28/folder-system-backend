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
    isfather: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    childrens: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      defaultValue: [],
    },
  },
  {
    timestamps: false,
    tableName: "folder",
  }
);

export default FolderModel;
