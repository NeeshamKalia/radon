const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor = async function (req,res){
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({msg: savedData})
}

const chetanBhagatBooks = async function (req,res){
    let data = await authorModel.find({author_name: "Chetan Bhagat"}).select({author_id:1})
    let sdata = await BookModel.find({author_id: data[0].author_id}).select("name")
    res.send({msg: sdata})
}

const twoStates = async function (req,res){
   
    let data = await BookModel.findOneAndUpdate({name: "Two states"},
    {$set:{price:100}},
    {new:true}).select({price:1, author_id:1, _id:0})
    let authData = await authorModel.find({author_id: data.author_id}).select({author_name:1, _id:0})        
     res.send({ data , authData})       
}




/* const booksbtw50100 = async function (req,res){
    let data = await BookModel.find({price:{$lte: 100, $gte:50}}).select({author_id:1,_id:0});
    let dataArray = []

    
    
}  */

//name:1, author_id:1, _id:0

/* const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false}) 
}*/

/* const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"} */
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
   /*  let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
} */

/* /*  *//* const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks}) */
 

 const booksbtw50100 = async function (req,res){
    let data = await bookModel.find({price:{$gte:50, $lte: 100}}).select({author_id:1, _id:0});
    let dataArray = []
    for (key in authorModel){
        if (key.author_id === data){
            dataArray.push(key.author_name)
        }
    }


  res.send({msg:dataArray})
} 
 



// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor 
module.exports.chetanBhagatBooks = chetanBhagatBooks
module.exports.booksbtw50100 = booksbtw50100
module.exports.twoStates = twoStates
// module.exports.=from the various kinds 
