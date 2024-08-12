const express = require("express")
const connection =require("./config/db");
const glassRouter=require("./routes/glass.route");

const server= express();
const PORT= 8980;
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



