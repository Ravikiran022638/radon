const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    userId:String,
    userName:{
        firstName: String,
        lastName: String,
    },
    balace:{
        type:Number,
        default:100,
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    isFreeAppuser:{
        type: Boolean,
        default:false
    }
   
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



