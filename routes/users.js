const express = require('express')
const { showData } = require('../db/seedData')
const usersRt = express.Router()
// const {check, ValidationResult} = require('express-validator')
const {User} = require('../models/users')
const {db} = require('../db')
const {logAllTables} = require('sequelize-logger')
const { Show } = require('../models')

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


//========================================================
//add movie to a user
//========================================================

usersRt.post('/:userId/shows/:showId', async (req,res)=>{
    const {userId, showId} = req.params

    const user = await User.findByPk(userId)
    if (!user) return res.status(401).send(`User ${userId} not found`)
    const show = await Show.findByPk(showId)
    if (!show) return res.status(401).send(`Show ${showId} not found`) 

    try{
        await user.addShow(show)
        logAllTables(db)
        res.status(201).send(`Show ${showId} added to user ${userId}`)
    } catch (error){
        console.log("there was an error!", error)
        res.status(500).send(error)
    }
})



module.exports = {usersRt}