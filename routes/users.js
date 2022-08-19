const express = require('express')
const { showData } = require('../db/seedData')
const usersRt = express.Router()
// const {check, ValidationResult} = require('express-validator')
const {User} = require('../models/users')

usersRt.get('/', (req,res)=>{
    res.send("the /users works!!!")
})

//========================================================
//all users
//========================================================

usersRt.get('/all', async (req,res)=>{
    const allUsers = await User.findAll()
    console.log(allUsers)
    console.log("http://localhost:3000/users/all works!!!")
    res.send(allUsers)
})

//========================================================
//one user
//========================================================

usersRt.get('/:id', async (req,res)=>{
    const oneUser = await User.findOne({where: {id: req.params.id}})
    console.log(oneUser.toJSON())
    res.send(oneUser)
})


module.exports = {usersRt}