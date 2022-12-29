const mongoose = require("mongoose");
const objectID=mongoose.Schema.Types.ObjectId

const propertyModel=new mongoose.Schema({
   
    properties:{type:[]},
    propertyType:{type:String,default:"farm"},
    country:{type:String},
    ownership:{type:String,enum:["owned","lease"]},
    leasePeriod:{type:Number,default:0},
    organizationId:[{type:objectID,ref:"organization"}],
    // orgID
},{timestamps:true})

module.exports=mongoose.model("property",propertyModel)


// userid inside book           
// bookid userid 
