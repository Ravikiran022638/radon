const bookdataModel= require("../models/bookdataModels")

const createNewbook = async function (req , res)  {
    let data = req.body
    let savedData= await bookdataModel.create(data)
    res.send({msg: savedData})
}

const getbookList = async function (req , res) {
    let allbooks = await bookdataModel.find()
    res.send({msg: allbooks})
}

module.exports.createNewbook=createNewbook
module.exports.getbookList=getbookList