const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares");
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');

const mid1 = function(req,res,next){
    let data = req.headers
    if(!data.isFreeAppUser == false){
        res.send("Request is missing mandatory header")

    }
    let prodid = req.body
    if(!req.body.productid)res.send("please include product id")
    if(!req.body.userid)res.send("Please include user id")
    let d =  userModel.findById(prodid.userid)
    if (d ==null)res.send("Please use right user id")
    let dd =  productModel.findById(prodid.productid)
    if (dd == null)res.send("please use right product id")
    console.log("exit here")

    next();


router.post("/createProduct", UserController.createProduct)

router.post("/createUser", UserController.createUser)

 router.post("/createOrder", mid1, UserController.createOrder )



}






//router.post("/createUser", UserController.createUser)
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





/* router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode) */



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;