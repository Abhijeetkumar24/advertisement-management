import express from 'express';
import indexRoute from './routes/indexRoute';
import dbConnection from './database/dbConnection';
import User from './database/models/userModel';

dbConnection;        // not necessary use for printing connected in console
  
new User();        

const app = express();
app.use(express.json());
app.use('/', indexRoute);

const port = 6000;
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})
