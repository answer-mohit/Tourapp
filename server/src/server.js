const express=require('express');
const app=express();
require('./conn/conn');
const cors=require('cors');
const tourModel=require("./models/tourModel"); 
port=8000||process.env.PORT;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('this is server');
});
app.get('/tour',async(req,res)=>{
    const tours=await tourModel.find();
    console.log(tours);
    res.status(201).send(tours);
});
app.listen(port,()=>{
    console.log(`this is my server ${port}`);
});