const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const tokencheck = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.status(400).send({msg: "BAD REQUEST"})
  
  //console.log(token);
  next()
}


const useridCheck = async function (req,res,next){
    let userId = req.params.userId;
    if (!userId){
      res.status(400).send({msg: "BAD REQUEST"})
    }
    
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      res.status(401).send({msg: "Unauthorized"})
    }
    //console.log(user)
    next()
}

const validUser = async function (req,res,next){
  let userToBeModified = req.params.userId
  let token = req.headers["x-auth-token"]
    
  let decodedToken = jwt.verify(token, 'functionup-radon')
  let userLoggedIn = decodedToken.userId
  if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'FORBIDDEN -User logged is not allowed to modify the requested users data'})
  next()
}








module.exports.tokencheck = tokencheck
module.exports.useridCheck = useridCheck

module.exports.validUser = validUser