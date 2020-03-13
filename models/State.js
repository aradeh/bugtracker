const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = (Sequelize, DataTypes) => {
const State = Sequelize.define('state',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    instate:{
        type : DataTypes.STRING
    }
});
    return State;
}

