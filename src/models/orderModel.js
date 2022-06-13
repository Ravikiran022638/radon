const mongoose = require('mongoose');
const ObjectId =mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    
    user_id:{
        type:ObjectId,
        ref: "User"

    },
    product_id:{
        type:ObjectId,
        ref: "Product"
    },
    amount: {
            type:Number

    },
    isFreeAppUser:Boolean,
    date:{ 
        type:Date,
        default: Date.now
    }
   
    
    
  

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
