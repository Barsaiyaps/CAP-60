const express = require("express")
const connection =require("./config/db");
const glassRouter=require("./routes/glass.route");

const server= express();
const PORT= 9000;
server.use(express.json());
server.use("/glass",glassRouter)

server.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})
server.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Server is running on port ${PORT}`)
        console.log("connected to the database")
    }
    catch(err){
        console.log("error connecting to database"+err)
    }
    
})







