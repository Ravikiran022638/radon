
const mid1= function ( req, res, next) {
  
    
}

const mid2= function ( req, res, next) {
    let today = moment();
    console.log(today.format("YYYY-MM-DD"))
    
}

const mid3= function ( req, res, next) {
   let today = new Date();
   let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
   let time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    let currentDate = date+ " " + time
   console.log(currentDate)
    next()
}

const mid4= function ( req, res, next) {
    console.log(req.ip)
    next()
}
 
const mid5= function ( req, res, next) {
    console.log(req.path)
    next()
}




module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mid5= mid5

