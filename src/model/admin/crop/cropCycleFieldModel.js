const mongoose = require("mongoose");
const objectID=mongoose.Schema.Types.ObjectId

const cropCycleFieldModel=new mongoose.Schema({
  
  avgWater:{type:String,required:true,trim:true},
 
  cropsID:[{type:objectID,ref:"cropModel"}],

  cropPropertyID:[{type:objectID,ref:"cropProperty"}],

  ExpectedProfit:{type:String,required:true,trim:true},  //per meter profit
 
  premium:{type:Boolean,required:true,trim:true},
 
  fieldID:{type:objectID,ref:"field"}

},{timestamps:true})
 
module.exports=mongoose.model("cropCycleField",cropCycleFieldModel)