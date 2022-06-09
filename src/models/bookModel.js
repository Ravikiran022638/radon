const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
      
    },
    price: Number,
    ratings: Number,
    publisher_id: {
        type: ObjectId,
        ref: "newPublisher"
       
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
