const mongoose=require('mongoose');
require('dotenv').config();

const dbURL = process.env.MONGO_URL;

mongoose.connect(dbURL)
.then(()=>{
    console.log("Connection Successfull")
})
.catch(()=>{
    console.log("Error Connecting to database")
});
const db =mongoose.connection;

module.exports=db;