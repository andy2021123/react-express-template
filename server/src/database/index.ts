import { Sequelize } from "sequelize"

const sequelize = (process.env.PG_HOST) ? (
  new Sequelize({
    dialect: "postgres",
    host: process.env.PG_HOST,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
  })
) : (
  new Sequelize({
    dialect: "sqlite",
    storage: "data/data.db"
  })
)

export default sequelize