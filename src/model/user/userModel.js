const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true,unique:true,lowercase:true,required:true },
    password: { type: String,min:6,max:18 },
    isDeleted:{type:Boolean,default:false},
    outhLogin:{type:Boolean,default:false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
