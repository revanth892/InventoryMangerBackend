const {DataTypes}=require('sequelize');
const sequelize =require('../config');

const Users = sequelize.define('Users',{
    
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    
},{
    timestamps:false
});

module.exports=Users;