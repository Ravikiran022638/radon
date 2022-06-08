const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createAuthors= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedata})
}

const bookList= async function (req, res) {
let data = await authorModel.find({author_Id:1}).select({author_name:"Chetan Bhagat"})
let bookData= await BookModel.find({author_Id:data.author_Id } )
res.send({msg: bookData})

}
const findAuthor= async function (req, res) {
    let data = await BookModel.findOneAndUpdate({bookName:"Two states"},{$set: {price:100}})
    let authorData= await authorModel.find({author_Id:data }).select({"author_name":"Chetan Bhagat"})
    let prices=data.price
    res.send({msg: authorData, prices})
}                                                                                    
const findBookPrice= async function (req, res) {
    let data = await BookModel.find({price:{$gte: 50, $lte: 100}}).select({author_id: 1,"author_name": "Chetan Bhagat",_id:0}) 
    let data2=  authorModel.map(x=>x.BookModel)
    
    res.send({msg: data,data2})
}


const findList= async function (req, res) {
    let data = await authorModel.find({"author_name":1},({$gt:["age":50]}))



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
