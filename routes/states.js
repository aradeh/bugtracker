const express = require('express');
const router = express.Router();
const db = require('../config/database');
const State = require('../models/State');


//get all states
router.get('/', (req,res) => {
    State.findAll()
        .then( states => {
            //res.sendStatus(200);
            res.json(states);
        })
        .catch(err => console.log("Error" + err))
});

module.exports = router;