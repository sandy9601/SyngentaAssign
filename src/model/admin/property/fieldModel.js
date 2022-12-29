const mongoose = require("mongoose");
const objectID=mongoose.Schema.Types.ObjectId

const fieldModel=new mongoose.Schema({
    length:{type:String},

    width:{type:String},
    address:{
    plotNo:{type:String},
    landMark:{type:String},
    city:{type:String},
    pinCodeNo:{type:Number},
  },
    cropCycleHistory:{
    cropCycleID:{type:objectID,ref:"cropCycle"}

  },
 
  avgWaterAvailable:{type:String,trim:true,required:true},
 
  regionID:{type:objectID,required:true,ref:"region"},



},{timestamps:true})

module.exports=mongoose.model("field",fieldModel)