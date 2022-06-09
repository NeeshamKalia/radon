const mongoose = require('mongoose');
const AuthorModel= require("../models/authorModel")
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
     author:{
            type:ObjectId,
            ref: 'author'
            }, 
    price: Number,
    ratings:Number,
    publisher: {
                type: ObjectId,
                ref: 'publisher'
    },
    isHardCover:{
        default: false
    }
}
, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
