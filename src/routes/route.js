const express = require('express');
//const myHelper = require('../util/helper')
const d = require('lodash')
//const underscore = require('underscore')
const router = express.Router();

//router.get('/test-me', function (req, res) {
   // myHelper.printDate()
    //myHelper.getCurrentMonth()
    //myHelper.getCohortData()
    //let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    //console.log('The first element received from underscope function is '+firstElement)
    //res.send('My first ever api!')
//});

router.get('/hello', function (req, res) {
   const a= require('lodash')
   const array = ["jan", "feb", "mar", "apr", "may" ,"june", "jul" , "aug", "sep", "oct", "nov", "dec"]
   console.log(a.chunk(array , 3))

   
   let c=[1,3,5,7,9,11,13,15,17,19]
   let arrayNew= d.tail(c)
   console.log(arrayNew)
   

   
    const e=([1,2,3,4,5], [6,7,8,9,10], [7,5,6,3,2], [6,4,6,5,1], [10,11,12,13])
    let arrayMerge=d.union(e) 
    console.log(arrayMerge)  
   
   
   const f=(["horror", "Conjuring"], ["drama", "The social network"], ["thrilller", "Prisioners"] , ["fantasy","Doctor strange"])
   let pairs= d.fromPairs(f)
   console.log(pairs);

    res.send('Hello there! im ravikiran')
});


//router.get('/candidates', function(req, res){
  //  console.log('Query paramters for this request are '+JSON.stringify(req.query))
  //  let gender = req.query.gender
  //  let state = req.query.state
   // let district = req.query.district
   // console.log('State is '+state)
   // console.log('Gender is '+gender)
   // console.log('District is '+district)
   // let candidates = ['Akash','Suman']
   // res.send(candidates)
//})

//router.get('/candidates/:canidatesName', function(req, res){
   // console.log('The request objects is '+ JSON.stringify(req.params))
   // console.log('Candidates name is '+req.params.canidatesName)
   // res.send('Done')
//})



// adding this comment for no reason

module.exports= router











