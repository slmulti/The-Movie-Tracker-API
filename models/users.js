const {db} = require('../db');
const { DataTypes } = require("sequelize");
const {userData} = require('../db/seedData')


const User = db.define('user', {
    name: DataTypes.STRING,
});

async function seedUser(){
    for (let user of userData){
        await User.create(user)
    }
}

module.exports = {User, seedUser}