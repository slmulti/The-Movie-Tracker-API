const express = require('express')
const { seed } = require('./models')
const app = express()
// const {Show, User} = require('./models/')
const {showsRt, usersRt} = require('./routes/')
const port = 3000

app.use(express.json())
app.use('/shows', showsRt)
app.use('/users', usersRt)


async function server (port){
    await seed()

    app.listen(port, () =>{
        console.log(`Server running on port: ${port}`)
    })
}

server(port)

