const express = require("express")
const fs= require("fs")
const server=express();
const path=require("path")
const PORT=4040;
const morgan = require("morgan")

server.use(express.json())

server.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'src/access.log'), { flags: 'a' })
  }))

server.get("/",(req,res)=>{
    res.send(`<h1>THIS IS HOME 1<\h1>`)

})
server.get("/get-users",(req,res)=>{
    res.send("<h2>THIS IS HOME 2</h2>")
})

server.post("/add-users",(req,res)=>{
    res.send("<h2>THIS IS HOME 3</h2>")
})

server.put("/user/:id",(req,res)=>{
    res.send("<h2>THIS IS HOME 4</h2>")
})

server.delete("/user/:id",(req,res)=>{
    res.send("<h2>THIS IS HOME 5</h2>")
})

server.listen(PORT,()=>{
    console.log(`LISTENING TO THE PORT ${PORT}`)
})
