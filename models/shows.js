const {db} = require('../db');
const { DataTypes } = require("sequelize");
const {showData} = require('../db/seedData')


const Show = db.define('show', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.REAL,
    status: DataTypes.BOOLEAN
});

async function main(){
    await Show.sync({force:true})

    showData.map(x => {
        Show.create({
            title: x.title,
            genre: x.genre,
            rating: x.rating,
            status: x.status
        })
    })
}

main()

module.exports = {Show}