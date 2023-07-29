import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';
import User from './userModel'; 

class Address extends Model {}

Address.init(
  {
    houseno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    addressType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Address',
    tableName: 'Addresses',
  }
);

// setting association between address and user

Address.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Address, {foreignKey: 'userId'});

export default Address;