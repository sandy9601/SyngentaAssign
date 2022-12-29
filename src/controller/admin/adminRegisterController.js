const adminModel=require("../../model/admin/adminModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerAdmin=async function (req,res){
    
    try {
        const data=req.body
        const saltRounds=10
        const newPassword=bcrypt.hashSync(data.password,saltRounds)
        data.password=newPassword
    
        let findEmail = await adminModel.findOne({ email: data.email});
        if (findEmail) {
          return res
            .status(400)
            .send({ status: false, message: "this email is already in use" });
        }
    
        const createData=await adminModel.create(data)
        return res.status(201).send({ status: true, data: "registered successfully login now" });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
   
    
}
const loginAdmin=async function (req,res){
    try {
        const data=req.body
        let findUser = await adminModel.findOne({ email: data.email});
        if (!findUser) {return res.status(404).send({ status: false, message: "user not found" })}
       let compare= bcrypt.compareSync(data.password,findUser.password)
       if(!compare){return res.status(401).send({ status: false, message: "incorrect password" });}
       let token = jwt.sign(
        {
          id: String(findUser._id),
          initializeAt: new Date(),
        },
        "school@#$%^&*Management",
        { expiresIn: "3h" }
      );
  
      res.setHeader("jwt", token);
      return res
      .status(200)
      .send({
        status: true,
        message: "login successful",
        token,
        id: findUser._id,
      });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });

    }
} 

module.exports={registerAdmin,loginAdmin}