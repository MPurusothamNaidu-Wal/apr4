const { Sequelize, DataTypes } = require("sequelize");

const db = require("../dbsql");

const Users = db.define(
    "users",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        dob: {
            type: DataTypes.DATE,
        },
    },
    {
        freezeTableName: true,
    }
);
export default Users;
