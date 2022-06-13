
const mid1= function ( req, res, next) {
    let data= req.header.token
    console.log(data);
    if (data) {
        next()
     }else{ res.send({msg:"request is missing a mandatory header"})
        
    }
}


module.exports.mid1= mid1
