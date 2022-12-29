
const mongoose = require("mongoose");


const cropModel=new mongoose.Schema({

  cropName:{type:String,trim:true,required:true,unique:true},

  avgWaterRequired:{type:String,trim:true,required:true},

  avgTemperatureRequired:{type:String,trim:true,required:true},

  climate:{type:String,enum:["dry","normal","moisture"]},

  typeofCrop:{ type: Number,enum : [0,1,2,3],default:0},

  isDeleted:{type:Boolean,default:false}

},{timestamps:true})

module.exports=mongoose.model("crop",cropModel)