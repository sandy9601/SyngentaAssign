const mongoose = require("mongoose");
const objectID=mongoose.Schema.Types.ObjectId

const cropPropertyModel=new mongoose.Schema({
  
  propertyID:{type:objectID,required:true,ref:"property"},


},{timestamps:true})

module.exports=mongoose.model("cropProperty",cropPropertyModel) 