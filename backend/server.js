const express=require('express');
const path = require('path');
const app=express();
const db=require('./db');
const bookRoutes=require('./routes/BookRoute');
const authRoutes=require('./routes/auth');
require('dotenv').config();

const port=process.env.PORT;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const cors = require('cors');
app.use(cors()); // ✅ This enables all CORS requests


app.use(express.json());
app.get('/', (req,res)=>{
    res.send("Hello my cutie....! the app is started");
});

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);


app.listen(port ,'0.0.0.0', ()=>{
    console.log("App Started on port 3000");
})

