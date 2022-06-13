const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
   productId : String,
   productName: String,
   category: String,
   price: {
        type:Number,
        required: true
   }
  
    }, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)
