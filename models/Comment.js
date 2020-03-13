const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = (Sequelize,DataTypes) => {
const Comment =  Sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    commentText:{
        type: DataTypes.STRING


    },
    bugid:{
        type: DataTypes.INTEGER,
        model: 'bugs',
        key: 'id'
    },
    userid:{
        type: DataTypes.INTEGER,
        model: 'users',
        key: 'id'
    }
});
    return Comment;
}
