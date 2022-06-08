const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( { 

    bookName: String,
    
    price: Number,
    ratings:{
            type:Number,
            unique: true
    },

    }, { timestamps: true });


    module.exports = mongoose.model('Book', bookSchema)