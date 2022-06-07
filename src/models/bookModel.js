const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( { 

    bookName: String,
    author_id: {
        type: String,
        unique: true,
        required: true
    },
    price: Number,
    ratings:{
            type:Number,
            unique: true
    },

    }, { timestamps: true });


    module.exports = mongoose.model('Book', bookSchema)