const Sequelize = require('sequelize');
const db = require('../config/database');

const Bug = db.define('bug', {
    title: {
        type : Sequelize.STRING
    },
    description: {
        type : Sequelize.STRING
    },
    
    createdBy: {
        type : Sequelize.STRING
    },
    
    assignedTo: {
        type : Sequelize.STRING
    },
    
    state: {
        type : Sequelize.INTEGER
    }
    ,
    sprint: {
        type : Sequelize.STRING
    }
    ,
    severity: {
        type : Sequelize.STRING
    }
    ,
    userstory: {
        type : Sequelize.STRING
    }
    ,
    screenshot: {
        type : Sequelize.JSON
    }
});

module.exports = Bug;