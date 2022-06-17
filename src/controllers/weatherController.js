let axios = require("axios")
const { route } = require("../routes/route")


const london = async function (req,res){
    try{
        let q = req.query.q
        let appId = req.query.appId
    let options = {
                    method: 'get',
                         url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appId=${appId}`
                 }
    let result = await axios(options)
   // let result = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
    let data = result.data
    res.status(200).send({msg: data, status: true})
                }
                catch(err){
                    console.log(err)
                    res.status(500).send({msg: err.message})
                }
}

const londonTemp = async function (req,res){
    try{
        let q = req.query.q
        let appId = req.query.appId
    let options = {
                    method: 'get',
                         url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appId=${appId}`
                 }
    let result = await axios(options)
   // let result = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
    let data = result.data.main.temp
    res.status(200).send({msg: data, status: true})
                }
                catch(err){
                    console.log(err)
                    res.status(500).send({msg: err.message})
                }
}


const sortedWeather = async function (req,res){
    try{
        let appId = req.query.appId
        let cities = ["London", "Bangalore", "Mumbai", "Delhi", "Kolkata", "Chennai", "Moscow"]
        let citiesObj = []
        for(let i=0; i<cities.length; i++){
            let Obj = { city: cities[i]}
            let options = {
                            method: 'get',
                        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appId=${appId}`
             }
            let result = await axios(options)
            let data= result.data
            Obj.temp = data.main.temp
            citiesObj.push(Obj)
        }
        let sorted = citiesObj.sort(function(a,b){return a.temp - b.temp})
        res.status(200).send({status: true, data : sorted})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}



module.exports.london = london
module.exports.londonTemp = londonTemp
module.exports.sortedWeather = sortedWeather