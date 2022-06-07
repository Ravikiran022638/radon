const { count } = require("console")
const authorModel = require("../models/authorModel")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createAuthors= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
let data = await AuthorModel.find({author_Id:1}).select({author_name:"Chetan Bhagat"})
let bookData= await BookModel.find({author_Id:data.author_Id } )
res.send({msg: bookData})

}
const findAuthor= async function (req, res) {
    let data = await BookModel.findOneAndUpdate({bookName:"Two States"},{$set: {price:100}})
    let authorData= await AuthorModel.find({author_Id:data.author_Id }).select({"author_name":"Chetan Bhagat"})
    res.send({msg: authorData})
}                                                                                    
const findBookPrice= async function (req, res) {
    let data = await (await BookModel.find({price:{$gte: 50, $lte: 100}}).select({author_Id:1})).map(x=>x.authorModel)
    res.send({msg: data})
}










//const getBooksData= async function (req, res) {
 //   let allBooks= await BookModel.find( {authorName : "HO" } )
  //  console.log(allBooks)
 //   if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
 //   else res.send({msg: "No books found" , condition: false})
//}


//const updateBooks= async function (req, res) {
   // let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    //let allBooks= await BookModel.findOneAndUpdate( 
     //   { authorName: "ABC"} , //condition
      //  { $set: data }, //update in data
      //  { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
    // )
     
   //  res.send( { msg: allBooks})
//}

//const deleteBooks= async function (req, res) {
    // let data = req.body 
   // let allBooks= await BookModel.updateMany( 
     //   { authorName: "FI"} , //condition
     //   { $set: {isDeleted: true} }, //update in data
     //   { new: true } ,
   //  )
     
   //  res.send( { msg: allBooks})
//}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createAuthors=createAuthors
module.exports.createBooks=createBooks
module.exports.bookList=bookList
module.exports.findAuthor=findAuthor
module.exports.findBookPrice=findBookPrice
