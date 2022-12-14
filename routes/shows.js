const express = require('express')
const showsRt = express.Router()
const {check, validationResult} = require('express-validator')
const {Show} = require('../models/shows')
const {User} = require('../models/users')
const {db} = require('../db')
const {logAllTables} = require('sequelize-logger')

showsRt.get('/', (req,res)=>{
    console.log("http://localhost:3000/shows/ works!!!")
    res.send("http://localhost:3000/shows/ works!!!")
})

//========================================================
//all shows
//========================================================

showsRt.get('/all', async (req,res)=>{
    const allShows = await Show.findAll()
    console.log(allShows)
    console.log("http://localhost:3000/shows/all works!!!")
    res.send(allShows)
})

//========================================================
//one show by ID
//========================================================

showsRt.get('/:id', async (req,res)=>{
    const oneShow = await Show.findOne({where: {id: req.params.id}})
    console.log(oneShow.toJSON())
    res.send(oneShow)
})   

//========================================================
//one show by title
//========================================================

showsRt.get('/title/:title', async (req,res)=>{
    const oneShow = await Show.findOne({where: {title: req.params.title}})
    if(!oneShow){
        res.send("This show isnt in the Database")
        return
    }
    // PUT IN VARIABLE use .replace to replACE %20 WITH OPEN SPACE
    console.log(oneShow.toJSON())
    res.send(oneShow)
})  

//========================================================
//shows of specific genre
//========================================================

showsRt.get('/genre/:genre', async (req,res)=>{

    const findGenre = await Show.findAll({where: {genre: req.params.genre}})
    logAllTables(db)
    res.send(findGenre)

})

//========================================================
//Add a show
//========================================================

showsRt.post('/', async (req, res) => {

    await Show.create(req.body)
    console.log(req.body)
    logAllTables(db)
    res.sendStatus(200)
    
})

//========================================================
//Update rating or status or anything else of a show
//========================================================

showsRt.put('/:id', async (req,res)=>{
    await Show.update(req.body, {where: {id:req.params.id}})
    res.sendStatus(200)

    // const updatedShow = await Show.findOne({where: {id:req.body.id}})
    // console.log(`${updatedShow.title} has had its online Status changed to ${updatedShow.online}`)

})

//========================================================
//Update rating of a show
//========================================================

// showsRt.put('/', async (req,res)=>{
//     await Show.update({rating: req.body.rating}, {where: {id:req.body.id}})
//     res.sendStatus(200)
// })

//========================================================
//delete a show
//========================================================

showsRt.delete('/delete/:showId', async (req,res)=>{
    const {showId} = req.params
    const show = await Show.findByPk(showId)
    if (!show) return res.status(401).send(`Show ${showId} not found`)
    await show.destroy()
    logAllTables(db)
    res.status(201).send(`Show ${showId} deleted`)
})

//========================================================
//all shows watched by one user
//========================================================

showsRt.get('/viewers/:showId', async (req,res)=>{
    const {showId} = req.params
    const showsWithUsers = await Show.findOne({
        where: {id: showId},
        include: [User]
    })
    res.send(showsWithUsers)
})







module.exports = {showsRt}