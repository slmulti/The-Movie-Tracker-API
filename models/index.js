const { db } = require('../db')
const { Show, seedShow } = require('./shows')
const { User, seedUser } = require('./users')


Show.belongsToMany(User, {through:'shows_watched'})
User.belongsToMany(Show, {through:'shows_watched'})

async function seed(){
    await db.sync({force:false})
    const users = await User.count()
    if (!users){
        await seedUser()
    }
    const shows = await Show.count()
    if (!shows){
        await seedShow()
    }
    console.log("The Database now has information in")
}



module.exports = {
    Show,
    User,
    seed
}