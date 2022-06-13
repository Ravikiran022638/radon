
const mid1= function ( req, res, next) {
    let data= req.header.isFreeAppUser
    if (!data===true) {
     res.send({msg:"error"})
        
    }
    else{

    res.send({ msg:"request is missing a mandatory header"})
    next()
   }
  
}


module.exports.mid1= mid1
