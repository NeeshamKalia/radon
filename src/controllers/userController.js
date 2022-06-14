const UserModel= require("../models/userModel")
const productModel = require("../models/productModel")
const orderSchema = require("../models/orderModel")
const userModel = require("../models/userModel")



const createProduct = async function (req,res){
    let data = req.headers
    let savedData = await productModel.create(data)
    res.send({msg: savedData})


}
const createUser= async function (req, res) {
    let data = req.headers
    
    if(data.isFreeAppUser == false){
        res.send("Request is missing mandatory header")

    }
    else {let savedData = await userModel.create(data)

        res.send({msg:savedData})
    }
}

    const createOrder= async function (req,res,next){
        let data = req.headers
        if (data.isFreeAppUser ==true){
            req.body.isFreeAppUser = true
            req.body.amount = 0
            let savedData = await orderSchema.create(req.body)
            res.send({msg: savedData})
        }
        else { let data = await orderSchema.find().populate('userid', 'productid')
            data.amount = orderSchema.userid.balance
            if (data.amount < data.productid.price){
                    res.send({msg: "you don't have sufficient balance"})
                }
            else savedData = await orderSchema.updateOne(
                {"userid.balance": {$gt:data.productid.price}},
                {$set:{"userid.balance": userid.balance - data.productid.price}})
                res.send({msg: savedData})
            
        }
    }
    /* else {let savedData = await userModel.create(data)
        res.send({msg:savedData})
    }
    let savedData = await UserModel.create(data)
}
     */



/* const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    } */


/*     let data= req.body
    let tokenDataInHeaders= req.headers.token
    //Get all headers from request
    console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
    console.log(req.headers.batch)
    console.log(req.headers["content-type"])
    console.log(tokenDataInHeaders)
    //Set a header in request
    req.headers['month']='June' //req.headers.month = "June"

    //Set an attribute in request object
    req.anything = "everything"
    
    
    console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
    res.header('year','2022')
    res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
} */

module.exports.createUser= createUser
module.exports.createProduct = createProduct
