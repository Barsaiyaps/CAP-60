const sum=require("./sum")

const fs = require("fs")

fs.readFile("./text.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

console.log("hii")