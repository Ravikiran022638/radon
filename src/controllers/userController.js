const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(200).send({ msg: savedData });
  } catch (err) {
    console.log("data error", error)
    res.status(500).send({ error: err.message })
  }
};

const loginUser = async function (req, res) {
  try {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
 
    if (!user)
      return res.status(400).send({ status: false, msg: "username or the password is invalid" });


    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
  } catch (err) {
    console.log("data error", error)
    res.status(500).send({ error: err.message })

  }
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  try {
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
  } catch (err) {
    console.log("data error", error)
    res.status(500).send({ error: err.message })

  }
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  try {
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
  } catch (err) {
    console.log("data error", error)
    res.status(500).send({ error: err.message })

  }
};

const deleteUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  try {
    if (!user) {
      return res.status(400).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
  } catch (err) {
    console.log("data error", error)
    res.status(500).send({ error: err.message })

  }
};

const postMessage = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  try {
    if (!user) {
      return res.status(401).send("No such user exists");
    }
    let message = req.body.message
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    return res.send({ status: true, data: updatedUser })
  } catch (err) {
    console.log("data error", error)
    res.status(500).send({ error: err.message })

  }
}



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage
