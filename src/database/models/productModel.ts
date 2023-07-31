import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbConnection';
import User from '../models/userModel';
import Category from './categoriesModel';
import Address from '../models/addressModel';

class Product extends Model { }

Product.init(
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    basePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    currentBid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bidderId: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
  }
);

// Setting up the associations with other tables using foreign keys
Product.belongsTo(User, { foreignKey: 'bidderId', as: 'bidder' });   //By default, Sequelize will assume that the foreign key in the
// Product table is named userId. However, in this case, the foreign key is explicitly specified using { foreignKey: 'bidderId' }.
//as: 'bidder' is also an optional configuration option. It provides an alias for the association.
//By default, Sequelize will use the singular form of the associated model's name (e.g., 'user' for the User model)
Product.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Product.belongsTo(Address, { foreignKey: 'addressId', as: 'address' });

export default Product;
