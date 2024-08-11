const express = require("express")
const connection =require("./config/db");
const GlassModel = require("./models/glass.model");

const server= express();
const PORT= 8980;
server.use(express.json());

server.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})

server.post("/create-glass",async (req,res)=>{
    const {color,material,size,brand}=req.body;
    try {
        const glass = new GlassModel({
            color,
            material,
            size,
            brand   
        })

        await glass.save()
        res.send("glass created successfully")
    } catch (error) {
        res.send("error creating glass"+error.message)
    }
})

server.get("/get-glasses", async(req,res)=>{
    try {
        const glasses=await GlassModel.find()
        res.status(200).json({"msg":"glasses feched succesfully",glasses})
    } catch (error) {
        res.send("error fetching glasses: "+error)
    }
})

server.patch("/update-glass/:id", async(req,res)=>{
    const {id}=req.params;
    try {
        const updateGlass=await GlassModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({"msg": "Updated Glass successfully", updateGlass})
    } catch (error) {
        res.status(404).send("error deleting the glasses: "+error)
    }
})

server.delete("/delete-glass/:id", async(req,res)=>{
    const {id}=req.params;
    try {
        const updateGlass=await GlassModel.findByIdAndDelete({_id:id},req.body)
        res.status(200).json({"msg": "Deleted Glass successfully", updateGlass})
    } catch (error) {
        res.status(404).send("error deleting the glasses: "+error)
    }
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















// const mongoose= require(`mongoose`);
// const url="mongodb://127.0.0.1:27017/glassCap10"

// const glassSchema= mongoose.Schema({    //Schema
//     color:String,
//     material:String,
//     size:Number,
//     brand:{type:String,required:true},
// },{
//     versionKey:false
// }
// )

// //model for the glass schema
// const GlassModel = mongoose.model("glass",glassSchema)  //glass = collection name  ==> converted to glasses

// const main=async()=>{
//     try{
//        const connection = await mongoose.connect(url)
//         console.log(`connected to the database`)
//         // await GlassModel.insertMany([{color:"black",material:"plasatic",size:10,brand:"rayban"},{color:"blue",material:"steel",size:22,brand:"fastrack"}])
//         const glass= new GlassModel({
//             color:"pink",
//             material:"steel",
//             size:20,
//             brand:"rayban"
//         })

//         await glass.save()
//         console.log("glass added successfully")
//         connection.disconnect()


        
//     }
//     catch(err){
//         console.log(`error connecting to the database ${err}`)
//     }
// }

// main()



