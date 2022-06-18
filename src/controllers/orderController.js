const { count } = require("console")

const orderModel = require("../models/orderModel")

const createOder= async function (req, res) {
  
    let data = req.body
    let userId = data.userId
    let productId= data.productId
    console.log(userId);
    console.log(productId);
 

    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}     

module.exports.createOder= createOder
