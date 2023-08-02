"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // datatypes ( supported by sequelize), model (base class of sequelize)
const dbConnection_1 = __importDefault(require("../dbConnection")); //sequelize is an instance of the Sequelize class, which is initialized with database connection details
class User extends sequelize_1.Model {
}
User.init(//// init method is used to define model attribute( column) 
{
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    profileImage: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: //After defining the attributes, an object is passed to the init method to specify model options  
    dbConnection_1.default,
    modelName: 'User',
    tableName: 'Users',
});
// The sequelize.sync() method is called to synchronize the model with the database 
// creates the "Users" table if it does not already exist and updates the table schema if there are any changes to the model.
dbConnection_1.default.sync({ alter: true })
    .then(() => {
    console.log('Database synchronized');
})
    .catch((error) => {
    console.error('Error synchronizing database:', error);
});
exports.default = User;
//# sourceMappingURL=userModel.js.map