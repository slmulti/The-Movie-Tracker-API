const {Show}=require('./models/shows')
const {User}=require('./models/users')

Show.belongsToMany(User, {through:'shows-watched'})
User.belongsToMany(Movie, {through:'shows-watched'})

module.exports = {
    Show,
    User
}