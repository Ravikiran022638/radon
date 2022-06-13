const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
   product_id : String,
   name: String,
   category: String,
   price: {
        type:Number,
        required: true
   }
  
    }, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)
