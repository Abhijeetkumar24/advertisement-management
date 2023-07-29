import express from 'express';
import indexRoute from './src/routes/indexRoute';
import dbConnection from './src/database/dbConnection';
import User from './src/database/models/userModel';

dbConnection;        // not necessary use for printing connected in console
  
new User();        

const app = express();
app.use(express.json());
app.use('/', indexRoute);

const port = 3000;
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})
