
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name:{type:String},
   
    email:{type:String},
 
    password:{type:String},
  
    typeOfEmployee:{type:String,enum:["Manager","CEO","General"],default:"General"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminSchema);
