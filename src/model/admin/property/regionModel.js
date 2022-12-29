const mongoose = require("mongoose");
const objectID=mongoose.Schema.Types.ObjectId
const regionModel=new mongoose.Schema({
   
  stateName:{type:String},
  
  avgTemperature:{type:String},
  
  avgMoisture:{type:String},
  
  climate:{type:String,enum:["dry","normal","moisture"]},

  // propertyID
  
},{timestamps:true})

module.exports=mongoose.model("region",regionModel)
