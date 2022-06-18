const { status } = require("express/lib/response")

const mid1= function ( req, res, next) {
    let data= req.headers.isfreeappuser
    console.log("present")
    next()
    if (!data) {
        res.send({msg:"request is missing a mandatory header", status:false})
        next()
    }  
} 
   const mid2= function (req, res, next){
    let userId= req.body
    let productId=req.body
    if(!userId){
    res.send({msg:"user not found"})
    }
    if (!productId) {
        res.send({msg:"product not found"})
        
    }
   }



   module.exports.mid1= mid1
    module.exports.mid2=mid2