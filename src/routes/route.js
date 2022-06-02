const express = require('express');
const outerModule = require('../logger/logger')
const utilModule= require('../util/helper')
const formatModule= require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {

    outerModule.welcome()
    utilModule.date()
    utilModule.month()
    utilModule.batchInfo()
    formatModule.trim()
    formatModule.lowerCase()
    formatModule.upperCase()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason