const Sequelize = require('sequelize');

const sequelize = new Sequelize('btracker', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  //operatorsAliases:false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

//Models
database.users = require('../models/User.js')(sequelize,Sequelize);
database.bugs = require('../models/Bug.js')(sequelize,Sequelize);
database.states = require('../models/State.js')(sequelize,Sequelize);
database.comments = require('../models/Comment.js')(sequelize,Sequelize);


//relations
database.comments.belongsTo(database.bugs);
database.bugs.hasMany(database.comments);
database.bugs.hasOne(database.states);
database.bugs.belongsTo(database.users);
database.users.hasMany(database.bugs);


module.exports = database;