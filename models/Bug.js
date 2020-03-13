const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = (Sequelize,DataTypes) => {

const Bug = Sequelize.define('bug', {
    title: {
        type : DataTypes.STRING
    },
    description: {
        type : DataTypes.STRING
    },
    sprint: {
        type : DataTypes.STRING
    }
    ,
    severity: {
        type : DataTypes.STRING
    }
    ,
    userstory: {
        type : DataTypes.STRING
    }
    ,
    screenshot: {
        type : DataTypes.JSON
    }
});
    return Bug;
}