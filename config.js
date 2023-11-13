const {Sequelize} = require('sequelize')

const sequelize=new Sequelize('node-complete','root','revanthnaidu@123',{
    host:'localhost',
    dialect:'mysql',
    // pool:{
    //     max:5,
    //     min:0,
    //     idle:1000
    // }
})

module.exports=sequelize;