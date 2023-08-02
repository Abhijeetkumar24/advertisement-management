"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const userModel_1 = __importDefault(require("../models/userModel"));
const categoriesModel_1 = __importDefault(require("./categoriesModel"));
const addressModel_1 = __importDefault(require("../models/addressModel"));
class Product extends sequelize_1.Model {
}
Product.init({
    productName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    },
    basePrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    currentBid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    bidderId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    categoryId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Product',
    tableName: 'Products',
});
// Setting up the associations with other tables using foreign keys
Product.belongsTo(userModel_1.default, { foreignKey: 'bidderId', as: 'bidder' }); //By default, Sequelize will assume that the foreign key in the
// Product table is named userId. However, in this case, the foreign key is explicitly specified using { foreignKey: 'bidderId' }.
//as: 'bidder' is also an optional configuration option. It provides an alias for the association.
//By default, Sequelize will use the singular form of the associated model's name (e.g., 'user' for the User model)
Product.belongsTo(userModel_1.default, { foreignKey: 'userId', as: 'user' });
Product.belongsTo(categoriesModel_1.default, { foreignKey: 'categoryId', as: 'category' });
Product.belongsTo(addressModel_1.default, { foreignKey: 'addressId', as: 'address' });
exports.default = Product;
//# sourceMappingURL=productModel.js.map