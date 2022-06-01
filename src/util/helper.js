 const printDate = function(){
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    console.log(`${cDay}/${cMonth}/${cYear}`);
    
    

 } 

 
 const getBatchInfo = function() {
    console.log('Radon, W3D3, the topic for today is Nodejs module system')
}





module.exports.printDate = printDate

module.exports.getBatchInfo = getBatchInfo