const express = require('express');
// const { welcome } = require('../logger/logger');
const externalModule = require('../logger/logger')
const nalModule = require('../util/helper')
const alModule = require('../validater/formatter')
const lModule = require('../validater/formatter')



const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    res.send('api train! sho shoo!')
    externalModule.welcome();
    nalModule.printDate()
    
    nalModule.getBatchInfo()
    lModule.trimIt()
    lModule.changeToUpperCase()
    lModule.changetoLowerCase()
});

 router.get('/hello', function (req, res) {
     let _ = require('lodash')
     res.send('My second ever api!')
     let year = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
     console.log(_.chunk(year,3));

     let odd = [1,3,5,7,9,11,13,15,17,19]
     let newArr = _.tail(odd)
     console.log(newArr)

     let a = [1,2], b = [2,3], c = [1,2,3,4], d = [4,5,6], e = [5,6]
     let Union = _.union(a,b,c,d,e)
     console.log(Union)


    let pairs = [["horror","TheShining"] , ["drama","Titanic"] , ["thriller","ShutterIsland"], ["fantasy","PansLabyrinth"]]
    const obj = _.fromPairs(pairs)
    console.log(obj)


 });

// router.get('/test-me2', function (req, res) {
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My last api!')


module.exports = router;
// adding this comment for no reason