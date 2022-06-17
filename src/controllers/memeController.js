let axios = require("axios")


const getmeme = async function (req,res){
    try{
        let q = req.query.q
        let appId = req.query.appId
    let options = {
                    method: 'get',
                         url: `https://api.imgflip.com/get_memes`
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




const meme = async function (req,res){
    try{
        let q = req.query.template_id
        username = req.query.username
        password = req.query.password
        let appId = req.query.appId
        text0 = req.query.text0
        text1 = req.query.text1
    let options = {
                    method: 'post',
                         url: `https://api.imgflip.com/caption_image?template_id=${q}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
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

module.exports.meme= meme
module.exports.getmeme = getmeme