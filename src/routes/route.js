const express = require('express');
const lodash = require('lodash')
const myMovies= require('../cinema/movie');


const router = express.Router();

//router.get('/test-me', function (req, res) {
   // myHelper.printDate()
    //myHelper.getCurrentMonth()
    //myHelper.getCohortData()
    //let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    //console.log('The first element received from underscope function is '+firstElement)
    //res.send('My first ever api!')
//});

router.get('/movies', function (req, res) {
  myMovies.getMovies
  res.send('wow nice movie')
});


router.get('/movies/1', function (req, res) {
   myMovies=console.log(movies.indexOf([1]))
   res.send('wow nice movie')
}); 
   
router.get('/films', function (req, res) {
   console.log(a)
   res.send('object of movies')
});  





// adding this comment for no reason
module.exports = router