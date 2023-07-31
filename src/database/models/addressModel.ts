import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';
import User from './userModel'; 

class Address extends Model {}

Address.init(
  {
    userId:{
      type:DataTypes.NUMBER,
      allowNull:false,
    },
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
      type: DataTypes.STRING,
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
// here we set associtaion from both direction
Address.belongsTo(User, {foreignKey: 'userId'});    // 1 to 1 relationship
User.hasMany(Address, {foreignKey: 'userId'});      // 1 to many relationship

export default Address;




/* The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).

The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).

The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

These three calls will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).

The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as 
junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C 
(unless it already exists) and define the appropriate foreign keys on it.
 */