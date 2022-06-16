const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const createUser = async function (abcd, xyz) {
    try {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  if (Object.keys(data).length == 0){
    res.status(400).send({msg: "BAD REQUEST"})
     }
  let savedData = await userModel.create(data);
  console.log(abcd.newAttribute);
  xyz.status(201).send({ msg: savedData });

}
catch(err) {
  console.log("this is the error: ", err.message)
   res.status(500).send({msg: "ERROR", error: err.message})
}
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const loginUser = async function (req, res){
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
  // if (Object.keys(req.body).length != 2){
  //   res.status(400).send({msg: "BAD REQUEST"})
  // }

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user) {
    return res.status(403).send({msg: "Forbidden"})
  }
    
   

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organization: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token }); 

}
catch(err) {
  console.log("this is the error: ", err.message)
   res.status(500).send({msg: "ERROR", error: err.message})
   }
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const getUserData = async function (req, res) {
  try{
 /*  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token); */
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
 /*  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(400).send({msg: "BAD REQUEST"}) */
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId);
  /* let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" }); */

  res.status(201).send({ status: true, data: userDetails });
}
catch(err) {
  console.log("this is the error: ", err.message)
   res.status(500).send({msg: "ERROR", error: err.message})
   }
} 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const updateUser = async function (req, res) {
  try{
 /*  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

console.log(token); */
  /* let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  } */
  let userId = req.params.userId;
  let userData = req.body;
  if (Object.keys(userData).length = 0){
      res.status(400).send({msg: "BAD REQUEST"})
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData)
  
  res.status(201).send({ status: true, data: updatedUser });
}
catch(err) {
  console.log("this is the error: ", err.message)
   res.status(500).send({msg: "ERROR", error: err.message})
   }
} 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const deleteUser = async function (req, res) {
  try{
  /* let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token); */
  /* let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  } */
  //update isDeleted to true for user
  let userId = req.params.userId;
  let  user = await userModel.findById(userId)
  user.isDeleted = true;
  res.status(201).send({msg:user})
}
catch(err) {
  console.log("this is the error: ", err.message)
   res.status(500).send({msg: "ERROR", error: err.message})
   }
} 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;