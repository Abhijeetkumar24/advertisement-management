"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../dbConnection"));
const userModel_1 = __importDefault(require("./userModel"));
class Address extends sequelize_1.Model {
}
Address.init({
    userId: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    houseno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    streetno: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    landmark: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    zipcode: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    addressType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: dbConnection_1.default,
    modelName: 'Address',
    tableName: 'Addresses',
});
// setting association between address and user 
// here we set associtaion from both direction
Address.belongsTo(userModel_1.default, { foreignKey: 'userId' }); // 1 to 1 relationship
userModel_1.default.hasMany(Address, { foreignKey: 'userId' }); // 1 to many relationship
exports.default = Address;
/* The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).

The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).

The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

These three calls will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).

The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as
junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C
(unless it already exists) and define the appropriate foreign keys on it.
 */ 
//# sourceMappingURL=addressModel.js.map