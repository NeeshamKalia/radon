const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
                type:String,
                required: true} ,
     authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages: Number,
    stockAvailable: Boolean,
    sales: {type: Number, default: 10},
    year:{
            default: 2021,
            type: Number,
    }
     });


module.exports = mongoose.model('Book', bookSchema) //Books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
