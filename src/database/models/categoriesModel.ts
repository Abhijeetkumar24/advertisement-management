import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnection";

class Categorie extends Model{}

Categorie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        category: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        subCategories: {
            type: DataTypes.STRING,
            allowNull:true,
        },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull:true,
        },
    },
    {
        sequelize,
        modelName: 'Categorie',
        tableName: 'Categories',
    }
);

export default Categorie;

