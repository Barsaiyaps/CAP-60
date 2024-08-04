const express=require("express")
const fs=require("fs")
var path=require("path")
const server=express()

server.use(express.json())
server.use(express.json())


const PORT=8008;

console.log("my name is pankaj")

server.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`)
})
