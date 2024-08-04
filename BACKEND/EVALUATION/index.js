const express =require('express');
const server = express();
const morgan = require('morgan');
const path = require('path');
const fs= require('fs');
const mongoose = require('mongoose');
const URL="mongodb://127.0.0.1:27017"

const PORT=4004;
server.use(express.json());
server.use(morgan("combined"))


const userSchema=mongoose.Schema({
    id:String,
    username:String,
    password:String,
    enrolledCourses:String,
})


const UserModel=mongoose.model("user",userSchema)

server.get("/courses",(req,res)=>{
    fs.readFile("./db.json","utf8",(err,data)=>{
        return res.send(JSON.parse(data));
    })})

server.post("/enroll",(req,res)=>{
    res.send("This is the courses")
})

server.post("/cancel-enrollment",(req,res)=>{
    res.send("This is the courses")
})

server.get("/my-courses",(req,res)=>{
    res.send("This is the courses")
})
server.listen(PORT,()=>
console.log(`Server is running on port ${PORT}`)
);  