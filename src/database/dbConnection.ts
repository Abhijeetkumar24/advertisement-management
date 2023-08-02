import { Sequelize } from "sequelize";
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize('Advertisement' , 'postgres', dbPassword,{
    host: '192.168.2.151',
    dialect: 'postgres',
});

sequelize.authenticate().then(
    () => { console.log("Database connected"); }
).catch((err) => {console.error("Unable to connect to the database: ", err)})

export default sequelize;