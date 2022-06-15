const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW= require("../middleWares/auth")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


router.get("/users/:userId",,userController.getUserData)


router.put("/users/:userId",commonMW.authorise,userController.updateUser)

router.delete("/users/:userId",commonMW.authorise,userController.deleteUser)

router.post("/users/:userId/posts",commonMW.authorise,userController.postMessage)

module.exports = router;