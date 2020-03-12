const express= require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const database = require('./config/database');
//test
database.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error:' + err));

const app = express();

app.get('/', (req,res) => res.send('-- Landing page of API -- '));
app.use('/users', require('./routes/users'));
app.use('/bugs', require('./routes/bugs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on the port ${PORT}`));