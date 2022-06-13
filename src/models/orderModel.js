const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    orderId: String, 
    userId:{
        type:Object_id,
        ref: "User"

    },
    productId:{
        type:Object_id,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser:Boolean,
    date: String,
    
   
    
    summary :  mongoose.Schema.Types.Mixed,
  

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
