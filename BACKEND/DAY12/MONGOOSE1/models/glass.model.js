const mongoose = require('mongoose');

const glassSchema= mongoose.Schema({    //Schema
    color:String,
    material:String,
    size:Number,
    brand:{type:String,required:true},
},{
    versionKey:false
}
)


//model for the glass schema
const GlassModel = mongoose.model("glass",glassSchema)  //glass = collection name  ==> converted to glasses

module.exports=GlassModel;
