const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/newPublisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author) res.send("Please include an author id")
    let d = await authorModel.findById(book.author)
    if (d == null) res.send ("Please use right author id")
   
    if(!book.publisher) res.send("Please include publisher as well")
    let ss = await publisherModel.findById(book.publisher)
    if (ss == null) res.send("Please use right publisher id")
   
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getAllBooks = async function (req,res){
    let books = await bookModel.find().populate('author, publisher')

/* const isHardCover = async function (req,res){
    let books = await
} */
            
    
    res.send({msg: books})
}
/* const getBooksData= async function (req, res) {
    let books = await publisherModel.find()
    res.send({data: books})
} */

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await 
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getAllBooks= getAllBooks
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

