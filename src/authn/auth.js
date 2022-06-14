const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const tokencheck = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
  console.log(token);
  next()
}


const useridCheck = async function (req,res,next){
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
    console.log(user)
    next()
}










module.exports.tokencheck = tokencheck
module.exports.useridCheck = useridCheck