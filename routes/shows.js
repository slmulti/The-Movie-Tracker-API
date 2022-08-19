const express = require('express')
const showsRt = express.Router()
// const {check, ValidationResult} = require('express-validator')
const {Show} = require('../models/shows')

showsRt.get('/', (req,res)=>{
    res.send("the /shows works!!!")
})

module.exports = {showsRt}