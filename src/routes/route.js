const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
//1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

router.get('/movies', function(req,res){
    movies = ["Chal mera putt", "Carry on Jatta", "Yaar anmulle", "Vaisakhi list", "Ardaas"]
    res.send(movies)
});

//2 n 3 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movies/:indexNumber', function(req, res){
    
    if (req.params.indexNumber > movies.length){
        res.send("please use right index number");
    }
    else {
        res.send(movies[req.params.indexNumber]);
    
    }
});

//4 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

router.get('/films', function(req,res){
    movies = [
         {
        "id": 1,
        "name": "The Shining"
       },
        {
        "id": 2,
        "name": "Incendies"
       }, 
       {
        "id": 3,
        "name": "Rang de Basanti"
       }, 
       {
        "id": 4,
        "name": "Finding Nemo"
       }
       ]
    res.send(movies)
    });

 //5 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&      

 router.get('/films/:filmId', function(req,res){
    movies = [
        {
       "id": 1,
       "name": "The Shining"
      },
       {
       "id": 2,
       "name": "Incendies"
      }, 
      {
       "id": 3,
       "name": "Rang de Basanti"
      }, 
      {
       "id": 4,
       "name": "Finding Nemo"
      }
      ]
      
      if (req.params.filmId > movies.length){
        res.send("No movie exists with this id");
       }
      else {
            for (let  i = 0; i<movies.length; i++){
               if (req.params.filmId == movies[i].id){
                
                res.send(movies[i])
                
                
                
               }
            }    
        }  
    });
    
   
        
    
    
    
             
       
       


/* router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
 */

module.exports = router;
// adding this comment for no reason