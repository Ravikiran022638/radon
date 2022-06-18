const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    authorId: {
        type: ObjectId,
        ref: "newAuthor"
      
    },
    price: Number,
    ratings: Number,
    publisherId: {
        type: ObjectId,
        ref: "newPublisher"
     },
    isHardCover: {
        type: Boolean,
        default:false
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
