const express = require('express');
const router = express.Router();
const bookdataModel= require("../models/bookdataModels")
const boookdataController= require("../controllers/bookdataControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewbook", boookdataController.createNewbook)

router.get("/getbookList", boookdataController.getbookList)

module.exports = router;