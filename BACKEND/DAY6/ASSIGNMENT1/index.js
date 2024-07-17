const express = require("express")

const server = express();

const PORT= 8080;

server.use(express.json());

const stringsInArray=(arr)=>{
    let flag=true;
    arr.forEach((e1)=>{
        if(typeof e1 !== "string"){
            flag = false;
            return flag
        } 
    })
    return flag
}
 const validatorMiddleware=(req,res,next)=>{

    let {ID,Name,Rating,Description,Genre,Cast}=req.body;
    let errorMsg="";
    if(typeof ID !=="number"){
        errorMsg+= "Id must be a number"
    }
    if(typeof Name !=="string"){
        errorMsg+= "Name must be a string"
    }
    if(typeof Rating !=="number"){
        errorMsg+= "Rating must be a number"
    }
    if(typeof Description !=="string"){
        errorMsg+= "Description must be a String"
    }
    if(typeof Genre !=="string"){
        errorMsg+= "Genre must be a string"
    }
    if(!Array.isArray(Cast) || !stringsInArray(Cast)){
        errorMsg+= "Cast must be a Array and String"
    }
    if(errorMsg){

        return res.status(400).json({
            message:"bad request. some data is incorrect",
            note:errorMsg,
        })
    }

    next();
 }

 server.post("/",validatorMiddleware,(req,res)=>{
    res.status(200).json({message:"data received"});
 })





server.listen(PORT,()=>{
    console.log(`server listening on the port ${PORT}`)
})

