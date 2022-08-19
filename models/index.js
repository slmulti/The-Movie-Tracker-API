const {Show, User}=require('./models/')


Show.belongsToMany(User, {through:'shows-watched'})
User.belongsToMany(Movie, {through:'shows-watched'})

module.exports = {
    Show,
    User
}