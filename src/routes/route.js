const express = require('express');
const router = express.Router();



router.get('/sol1', function (req, res) {
    let arr = [1,2,3,5,6,7]
    let missingNumber;
    // sum of n numbers is n(n+2)/2
    sumN = ((arr.length+1) * (arr.length+2))/2;
    sumArr = 0;
    for(let i=0; i<arr.length; i++){
        sumArr +=  arr[i];
    } 
    missingNumber = sumN - sumArr;
    res.send({data: missingNumber});
});


router.get('/sol2',function(req,res){
    let arr = [33,34,35,37,38]
    let missingNumber;
    sumN = arr.length*((33+38)/2)
    
    
    sumN = (arr.length+1)*((33+38)/2)
    sumArr = 0;
    for ( let i=0; i<arr.length; i++){
        sumArr += arr[i]
    }
    missingNumber = sumN - sumArr

    res.send({data: missingNumber});

});








module.exports = router;