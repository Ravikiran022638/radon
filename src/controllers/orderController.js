const { count } = require("console")

const orderModel = require("../models/orderModel")

const createOder= async function (req, res) {
    let data = req.body
    let userId = data.user_id
    let productId= data.product_id
    console.log(userId);
    console.log(productId);
    if(!req.header.isFreeAppUser) return res.send({msg: 'AuthorId is mandatory in the request'})

    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}

module.exports.createOder= createOder
