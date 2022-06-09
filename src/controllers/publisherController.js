const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")



const createPublisher= async function (req, res) {
    let  Publisher= req.body
    let PublisherCreated = await PublisherModel.create(Publisher)
    res.send({data: PublisherCreated})
}

module.exports.createPublisher=createPublisher