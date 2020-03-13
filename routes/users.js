const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User'); 

//Get
router.get('/', (req,res) => 
    User.findAll()
        .then( users => {
            //console.log(users);
            //res.sendStatus(200);
            res.json(users);
        })
        .catch( err => {
            res.send(err);
            console.log(err)
        })
);


//add 
router.post('/create', (req,res) =>{
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        team: req.body.team,
        supervisor: req.body.supervisor
    })
        .then(users => res.redirect('/users'))
        .catch(err => console.log(err));
});


//update
router.put('/update/:id',(req,res)=>{
    User.update(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: req.body.role,
            team: req.body.team,
            supervisor: req.body.supervisor
        },
        {where: req.params.id}
    )
    .then(updated => res.json(updated))
    .catch(err => res.send(err))
});


//delete
router.delete('/delete/:id', (req,res)=>{
    User.destroy({
        where: {
            id: req.params.id
        }
        })
        .then(res =>res.redirect('/'))
        .catch(err => res.send(err))
});


module.exports = router;