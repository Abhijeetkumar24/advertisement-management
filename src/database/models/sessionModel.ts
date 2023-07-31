// import { DataTypes, Model } from "sequelize";
// import sequelize from "../dbConnection";
// import Product from "./productModel";

// class Session extends Model{}

// Session.init(
//     {   
//         userId:{
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },  
//         productId:{
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         review:{
//             type: DataTypes.STRING,
//             allowNull:false,
//         },
//     },
//     {
//         sequelize,
//         modelName: 'Review',
//     }
// );

// Review.belongsTo(Product, {foreignKey: 'productId'});
// Product.hasMany(Review, {foreignKey: 'productId'});

// export default Review;