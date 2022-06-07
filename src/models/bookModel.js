const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( { 

    bookId: {
            type: String,
            unique: true,
            required: true
    },
    bookName: String,
    authorName: String,
    price: Number,
    rating:{
            type:Number,
            unique: true
    },

    }, { timestamps: true });


    module.exports = mongoose.model('Book', bookSchema)