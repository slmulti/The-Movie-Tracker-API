const express = require('express')
const showsRt = express.Router()
const {check, validationResult} = require('express-validator')
const {Show} = require('../models/shows')

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
    // PUT IN VARIABLE use .replace to replACE %20 WITH OPEN SPACE
    console.log(oneShow.toJSON())
    res.send(oneShow)
})  

//========================================================
//shows of specific genre
//========================================================

showsRt.get('/genre/:genre', async (req,res)=>{

    const findGenre = await Show.findAll({where: {genre: req.params.genre}})
    console.log(findGenre)
    res.send(findGenre)

})

//========================================================
//Add a show
//========================================================

// showsRt.post('/', [check('type').trim().not().isEmpty()],async (req, res) => {

//     const errors = validationResult(req)
//     if (!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()})
//     }
//     await Show.create(req.body)
//     res.sendStatus(200)
    
// })

showsRt.post('/', async (req, res) => {

    await Show.create(req.body)
    console.log(req.body)
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






module.exports = {showsRt}