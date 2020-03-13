const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = (Sequelize,DataTypes) => {

 const User = Sequelize.define('user',{
    firstName: {
        type: DataTypes.STRING,
    },
    
    lastName: {
        type: DataTypes.STRING
    },
    
    role: {
        type: DataTypes.STRING
    },
    
    team: {
        type: DataTypes.STRING
    },
    
    supervisor: {
        type: DataTypes.STRING
    }
 });

 return User;
};


