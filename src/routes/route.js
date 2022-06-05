const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", async function(req,res){
    let data = req.body
    let savedBook = await bookModel.create(data)
    res.send({msg: savedBook})
}  );

router.get("/bookList",  async function(req,res){       //UserController.getUsersData
    let bookList  = await bookModel.find()
    res.send({msg: bookList})
});            

module.exports = router;