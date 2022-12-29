const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true,unique:true,lowercase:true,required:true },
    password: { type: String,min:6,max:18 },
    headOffice:{type:String,default:"Delhi"},
    noOfemployes:{type:Number},
    CEO:{type:String,default:"Sandy"},
    crops:{type:[]},
    foundedIn:{type:Number},
    foundedBy:{type:String},
    website:{type:String},
    type:{type:String,enum:["private","public","ppp"]},
    areaServed:{type:String,default:"Pan india"},
    isDeleted:{type:Boolean,default:false},
    outhLogin:{type:Boolean,default:false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("organization", organizationSchema);
