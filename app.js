const express = require('express')
const app = express()
// const {Show, User} = require('./models/')
const {showsRt, usersRt} = require('./routes/')
const port = 3000

app.use(express.json())
app.use('/shows', showsRt)
app.use('/users', usersRt)




app.listen(port, () =>{
    console.log(`Server running on port: ${port}`)
})