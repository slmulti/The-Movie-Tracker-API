const express = require('express')
const usersRt = express.Router()
// const {check, ValidationResult} = require('express-validator')
const {User} = require('../models/users')

usersRt.get('/', (req,res)=>{
    res.send("the /users works!!!")
})

module.exports = {usersRt}