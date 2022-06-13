const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema( {
    order_id: String, 
    user_id:{
        type:Object_id,
        ref: "User"

    },
    product_id:{
        type:Object_id,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser:Boolean,
    date: String,
    
   
    
    summary :  mongoose.Schema.Types.Mixed,
  

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
