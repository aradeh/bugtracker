const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Comment = require('../models/Comment');

router.get('/', (req,res) => {
    Comment.findAll()
        .then(comments => {
            res.json(comments)
        })
        .catch(err => res.json(err))
});

module.exports = router;