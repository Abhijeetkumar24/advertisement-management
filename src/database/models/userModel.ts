import { DataTypes, Model } from 'sequelize';     // datatypes ( supported by sequelize), model (base class of sequelize)
import sequelize from '../dbConnection';     //sequelize is an instance of the Sequelize class, which is initialized with database connection details

class User extends Model {
  static id: any;
}

User.init(           //// init method is used to define model attribute( column) 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profileImage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,
    },

  },
  {                   //After defining the attributes, an object is passed to the init method to specify model options  
    sequelize,        //indicating that this model will be associated with that database connection.
    modelName: 'User',
    tableName: 'Users',
  }
);
    

// The sequelize.sync() method is called to synchronize the model with the database 
// creates the "Users" table if it does not already exist and updates the table schema if there are any changes to the model.

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });


export default User;
