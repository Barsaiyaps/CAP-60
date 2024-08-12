const express  = require("express")  
const GlassModel = require("../models/glass.model")

const glassRouter = express.Router()

glassRouter.post("/create-glass",async (req,res)=>{
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

glassRouter.get("/get-glasses", async(req,res)=>{
    try {
        const glasses=await GlassModel.find()
        res.status(200).json({"msg":"glasses feched succesfully",glasses})
    } catch (error) {
        res.send("error fetching glasses: "+error)
    }
})

glassRouter.patch("/update-glass/:id", async(req,res)=>{
    const {id}=req.params;
    try {
        const updateGlass=await GlassModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({"msg": "Updated Glass successfully", updateGlass})
    } catch (error) {
        res.status(404).send("error deleting the glasses: "+error)
    }
})

glassRouter.delete("/delete-glass/:id", async(req,res)=>{
    const {id}=req.params;
    try {
        const updateGlass=await GlassModel.findByIdAndDelete({_id:id},req.body)
        res.status(200).json({"msg": "Deleted Glass successfully", updateGlass})
    } catch (error) {
        res.status(404).send("error deleting the glasses: "+error)
    }
})

module.exports = glassRouter;