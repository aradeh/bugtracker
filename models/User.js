const Sequelize = require('sequelize');
const db = require('../config/database');

 const User = db.define('user',{
    firstName: {
        type: Sequelize.STRING
    },
    
    lastName: {
        type: Sequelize.STRING
    },
    
    role: {
        type: Sequelize.STRING
    },
    
    team: {
        type: Sequelize.STRING
    },
    
    supervisor: {
        type: Sequelize.STRING
    }
 });

module.exports = User;
