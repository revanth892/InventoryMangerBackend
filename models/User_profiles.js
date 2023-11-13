const {DataTypes}=require('sequelize');
const sequelize =require('../config');
const Users = require('./User');

const User_profiles = sequelize.define('User_profiles',{
    

    fullname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    bio:{
        type: DataTypes.TEXT,
    },
    
},{
    timestamps:false
})

module.exports=User_profiles;