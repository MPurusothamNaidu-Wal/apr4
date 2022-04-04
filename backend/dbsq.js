const Sequelize = require("sequelize");

const db = new Sequelize("root", "westsidenode", "umaushan", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = db;