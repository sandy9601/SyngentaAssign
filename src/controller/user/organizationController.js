const userModel = require("../../model/user/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validation = require("../../validation/validation");
const validator = require("validator");
const organizationModel=require("../../model/user/organizationModel")

const registerOrganization = async (req, res) => {
  //console.log(req.body.name);
  let { name, email, password, headOffice,noOfemployes,CEO,crops } = req.body;
  try {
    if (!validation.isValid(name)) {
      return res
        .status(400)
        .send({ status: false, message: "name is required" });
    }
    if (!validator.isAlpha(name.trim()))
      return res
        .status(400)
        .send({ status: false, msg: "name must be between a-z or A-Z" });

    if (!validation.isValid(email)) {
      return res
        .status(400)
        .send({ status: false, message: "email is required" });
    }
    if (!validation.isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "password is required" });
    }
    if (password.length < 8 || password.length > 16) {
      return res
        .status(400)
        .send({
          status: false,
          message: "password must be 8 to 16 character long",
        });
    }
       let findEmail = await userModel.findOne({ email: email, isDeleted: false });
    if (findEmail) {
      return res
        .status(400)
        .send({ status: false, message: "this email is already in use" });
    }

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
   req.body.password = hash;
   console.log(hash)
    let newData = await organizationModel.create(req.body);
    return res
      .status(201)
      .send({ status: true, data:newData,messsage: "organization registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

//  !    login user

const loginOrganization = async function (req, res) {
  try {
    let { email, password } = req.body;

    if (!validation.isValid(email)) {
      return res
        .status(400)
        .send({ status: false, message: "email is required" });
    }
    if (!validation.isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "password is required" });
    }

    let findUser = await organizationModel.findOne({ email: email, isDeleted: false });
    if (!findUser) {
      return res.status(404).send({ status: false, message: "user not found" });
    }

    let compare = bcrypt.compareSync(password, findUser.password);
    //console.log(compare)
    if (!compare) {
      return res
        .status(401)
        .send({ status: false, message: "incorrect password" });
    }

    let token = jwt.sign(
      {
        id: String(findUser._id),
        initializeAt: new Date(),
      },
      "school@#$%^&*Management",
      { expiresIn: "3h" }
    );

    res.setHeader("jwt", token);
    //console.log(token);
   return res
      .status(200)
      .send({
        status: true,
        message: "login successful",
        token,
        id: findUser._id,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports = { registerOrganization, loginOrganization };
