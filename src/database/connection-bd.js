import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "awade123*",
  database: "folderSystem",
  port: 5432,
});

export default sequelize;