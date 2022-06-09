const authorModel = require("../models/authorModel")
const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")


    const createBook = async function (req, res) {
        let data =req.body
        let{authorId , publisherId}=req.body
        console.log(authorId);
        console.log(publisherId);

        if(!authorId){
            return res.send({error:"author ID is required"})
        }
    
        let checkAuthor = await authorModel.findById(authorId)
        if(!checkAuthor){
            return res.send({error:"author ID is not valid"})  
        }
    
        if(!publisherId){
            return res.send({error:"publisher ID is required"})
        }
    
    
        let checkPublisher = await publisherModel.findById(publisherId)
        if(!checkPublisher){
            return res.send({error:"publisher ID is not valid"})
        }
    
        let savedata = await bookModel.create(data)
              res.send({data:savedata})
    }


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author_id" , "publisher_id ")
    res.send({data: books})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

