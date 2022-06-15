const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const commonMW = require('../middlewares/auth');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


router.get("/users/:userId",commonMW.authenticateMId1 ,userController.getUserData)
router.post("/users/:userId/posts",commonMW.authenticateMId1 ,commonMW.authoriseMid2,userController.postMessage)

router.put("/users/:userId", commonMW.authenticateMId1,userController.updateUser)

router.delete("/users/:userId",commonMW.authenticateMId1 ,userController.deleteUser)



module.exports = router;