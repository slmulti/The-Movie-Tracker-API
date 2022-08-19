const {db} = require('../db');
const { DataTypes } = require("sequelize");
const {showData} = require('../db/seedData')


const Show = db.define('show', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.REAL,
    online: DataTypes.BOOLEAN
});

async function seedShow(){
    for (let show of showData){
        await Show.create(show)
    }
}

module.exports = {Show, seedShow}