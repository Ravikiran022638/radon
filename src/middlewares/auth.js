
const req = require("express/lib/request");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");




const authenticateMId1 = async function(req , res , next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
     let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

    next()
    }

  
  const authoriseMid2 = function(req, res, next) {
      // comapre the logged in user's id and the id in request
   let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})




      next()
  }




  
   // const authenticate = function(req, req, next) {
      //check the token in request header
      //validate this token
  
      //next()
  //}
  

module.exports.authenticateMId1= authenticateMId1
module.exports.authoriseMid2= authoriseMid2

