const {db} = require('../db');
const { DataTypes } = require("sequelize");
const {userData} = require('../db/seedData')


const User = db.define('user', {
    name: DataTypes.STRING,
});

async function main(){
    await User.sync({force:true})

    userData.map(x => {
        User.create({
            name: x.name
        })
    })
}

main()

module.exports = {User}