const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["Horror" , "Romance" ,"Fantasy" ,"Biography" , "Thriller"],
        required: true
    },
    year: {
            type: Number,
            unique: true
    }    
    },{ timestamps: true });

    module.exports = mongoose.model('Book', bookSchema)