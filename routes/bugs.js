const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Bug = require('../models/Bug');

//Get
router.get('/', (req, res) => {
    Bug.findAll().then(bugs => {
        console.log(bugs);
        res.sendStatus(200);
    }).catch(err => console.log(err))
});

//Post
router.post('/create', (req,res) => {

});

//put
router.put('/update/:id', (req,res) => {
    Bug.update(
        {
          title: req.body.title,
          description: req.body.description,
          createdBy: req.body.createdBy,
          state: req.body.state,
          sprint: req.body.sprint,
          severity: req.body.severity,
          userstory: req.body.userstory,
          screenshot: req.body.screenshot  
        },
        {where: req.params.id}
    )
    .then(res=>res.redirect('/'))
    .catch(err => res.send(err))

});


//delete
router.delete('/delete/:id', (req,res)=>{
    Bug.destroy({
        where : {
            id: req.params.id
        }
    })
    .then(res=>res.redirect('/'))
    .catch(err => res.send(err))
});


module.exports = router;