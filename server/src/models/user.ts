import { DataTypes } from "sequelize";
import sequelize from "database";

const User = sequelize.define("user", {
  first: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last: DataTypes.STRING,
  address1: DataTypes.STRING,
  address2: DataTypes.STRING,
});

export default User;
