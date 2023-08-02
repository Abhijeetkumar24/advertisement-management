"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
class Categorie extends sequelize_1.Model {
}
Categorie.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    subCategories: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: sequelize_1.DataTypes.BLOB('long'),
        allowNull: true,
    },
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Categorie',
    tableName: 'Categories',
});
exports.default = Categorie;
//# sourceMappingURL=categoriesModel.js.map