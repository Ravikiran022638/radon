const authorModel = require("../models/authorModel")
const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../controllers/publisherController")
const { send } = require("express/lib/response")


    const createBook = async function (req, res) {
        let data =req.body
        let{authorId , publisherId}=req.body
        console.log(authorId);
        console.log(publisherId);

        let savedata = await bookModel.create(data)
        res.send({data:savedata})


        if(!authorId){
        res.send({error:"author ID is required"})
        }
    
    
    if(!publisherId){
             res.send({error:"publisher ID is required"})
        }
   
    }

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("authorId" , "publisherId ")
    res.send({data: books})
}

const changeBook= async function (req, res) {
let bookChange= await bookModel.findOneAndUpdate().populate("publisherId ", {$set:{ isHardCover: true}}, {new:true})
res,send({data:bookChange})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.changeBook= changeBook

