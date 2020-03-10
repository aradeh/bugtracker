const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Bug = require('../models/Bug');

router.get('/', (req, res) => {
    Bug.findAll().then(bugs => {
        console.log(bugs);
        res.sendStatus(200);
    }).catch(err => console.log(err))
});

module.exports = router;