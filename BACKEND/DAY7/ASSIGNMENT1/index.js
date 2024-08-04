const express = require("express")
const fs=require("fs")
const server=express();

const PORT=8090;

server.use(express.json());

server.get("/",(req,res)=>{
    res.send("pankaj")
})

server.get("/user-data",(req,res)=>{
    const userData = fs.readFileSync("./db.json", "utf8"); 
    res.send(userData)

})

server.post("/add",(req,res)=>{
    let incomingData=req.body
    //console.log("incomig:",incomingData)
    const userData=fs.readFileSync("./db.json", "utf8")
    //console.log("user",userData)
    const parsedData = JSON.parse(userData)
    console.log("parsedData", parsedData)
    parsedData.data.push(incomingData)
    //console.log("old+new",parsedData)
    fs.writeFileSync("./db.json", JSON.stringify(parsedData,null,2))
    res.send(parsedData)
    
    })

server.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`)
})