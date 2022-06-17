const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../authn/auth")
const cowinController = require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId",cowinController.getDistricts)  //because we also stateId for which we need the districts for so that will be provided in params hence /:stateId

router.get("/cowin/districtsDate", cowinController.districtsDate)

router.get("/cowin/getByPin",cowinController.getByPin)
router.post("/getOtp", cowinController.getOtp)
router.get("/london", weatherController.london)
router.get("/londonTemp", weatherController.londonTemp)
router.get("/sortedWeather", weatherController.sortedWeather)

router.get("/getmeme", memeController.getmeme)
router.post("/meme", memeController.meme)
/* router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.tokencheck,  auth.useridCheck, auth.validUser, userController.getUserData)

router.put("/users/:userId",auth.tokencheck, auth.useridCheck, auth.validUser,userController.updateUser)

router.delete("/users/:userId",auth.tokencheck, auth.useridCheck, auth.validUser,userController.deleteUser)
 */
module.exports = router;