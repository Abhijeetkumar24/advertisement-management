"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const productModel_1 = __importDefault(require("./productModel"));
class Review extends sequelize_1.Model {
}
Review.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    review: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Review',
});
Review.belongsTo(productModel_1.default, { foreignKey: 'productId' });
productModel_1.default.hasMany(Review, { foreignKey: 'productId' });
exports.default = Review;
//# sourceMappingURL=reviewModel.js.map