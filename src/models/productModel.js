const mongoose = require('mongoose');


const productSchema = new mongoose.Schema( {
    /* name: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    
    // " best bo
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    summary :  mongoose.Schema.Types.Mixed,
    isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty") */
    name: String,
    category: { type: String,
        enum: ["book", "keyboard", "headphones"]},
    price: {
        required: true,
        type: Number
    }


}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema) //users
