const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
     userid : {
        type: objectId,
        ref: 'User'
    }, 
    productid: {
            type: objectId,
            ref: 'Product'
    },
    amount: {
        default: 0,
        type: Number},
    isFreeAppUser: {type:Boolean},
    time: {type: Date
            , default: Date.now}

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
