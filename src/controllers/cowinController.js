let axios = require("axios")



const  getStates =  async function (req,res){
    try{
    let options = {
                    method: 'get',
                         url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
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

const  getDistricts = async function (req,res){
    try{
    let id = req.params.stateId
    let options = {
                    method: 'get',
                    url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
                }
    let result = await axios(options)
    //let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`);
    console.log(result)
    let data = result.data
    res.status(200).send({msg: data, status: true})
}
catch(err){
    console.log(err)
    res.status(500).send({msg: err.message})
}
}


const  getByPin = async function (req,res){
    try{
    let pin = req.query.pincode
    let date = req.query.date
    console.log(`query params are ${pin} ${date}`)
    let options = {
                    method: 'get',
                    url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({msg: data, status: true})

}
catch(err){
    console.log(err)
    res.status(500).send({msg: err.message})
}
}

const getOtp = async function(req,res){
    try{
        let num = req.body
        console.log(`your body is ${num}`)
        let options = {
                method: 'post',
                url: 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
                data:num 
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg: data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
    
}

const districtsDate = async function (req,res){
    try{
        let id = req.query.district_id
        let date = req.query.date
    //console.log(`query params are ${pin} ${date}`)
    let options = {
                    method: 'get',
                    url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({msg: data, status: true})

}
catch(err){
    console.log(err)
    res.status(500).send({msg: err.message})
}
}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.districtsDate = districtsDate