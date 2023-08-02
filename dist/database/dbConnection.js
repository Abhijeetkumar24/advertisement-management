"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const sequelize = new sequelize_1.Sequelize('Advertisement', 'postgres', dbPassword, {
    host: '192.168.2.151',
    dialect: 'postgres',
});
sequelize.authenticate().then(() => { console.log("Database connected"); }).catch((err) => { console.error("Unable to connect to the database: ", err); });
exports.default = sequelize;
//# sourceMappingURL=dbConnection.js.map