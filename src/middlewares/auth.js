
const abc = require("express/lib/request");
const cba = require("express/lib/response");
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");



const authorise =  async function (req, res, next){
 
  try { 
  let token = req.headers["x-auth-token"] || req.headers["x-auth-token"]
console.log(token)
if(!token)  res.status(403).send({status: false, msg: "token must be present"})

let decodedToken = jwt.verify(token, "functionup-radon");
let userId = req.params.userId;
let userLoggedIn = decodedToken.userId;

if(userId!=userLoggedIn)
return res.status(403).send("User logged in is not allowed to modified another users data");

let user = await userModel.findById(userId);
if (!user) {
  return res.status(403).send("No such user exists")
}
req.user = user;
}catch (error) {
  return res.status(403).send("the token is Invalid")
}
next()
}
 
module.exports.authorise=authorise

