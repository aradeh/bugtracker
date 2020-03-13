const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Bug = require('../models/Bug');

//Get
router.get('/', (req, res) => {
    db.bugs.findAll({
        include
    }).then(bugs => {
        //console.log(bugs);
        //res.sendStatus(200);
        res.json(bugs);
    }).catch(err => console.log(err))
});

//get bug with id
router.get('/:id', (req, res) => {
    db.bugs.findAll({
        where : {
            id : req.params.id 
        } ,
        include : [
            {
                model : db.comments
                    
            },
            {
                model : db.users
            }
        ]
    })
    .then(bugs => {
        const resObj = bugs.map(bug => {

            return Object.assign({},{
                bugId: bug.id,
                title: bug.title,
                description: bug.description,
                state: bug.state,
                sprint:bug.sprint,
                severity:bug.severity,
                userstory: bug.userstory,
                createdAt:bug.createdBy,
                updatedAt: bug.updatedAt,
                comments: bug.comments.map(comment =>{
                    return Object.assign({},{
                        commentId: comment.id,
                        commentText: comment.commentText,
                        updatedAt: comment.updatedAt,
                        user: comment.user.map(user => {
                            return Object.assign({},{
                                userId : user.id,
                                firstName: user.firstName,
                                lastName: user.lastName
                            })
                        })
                    })
                }),
                user: bug.users.map(user=> {
                    return Object.assign({},{
                        //return user 
                    })
                })

            })
        });




        console.log(bugs);
        res.sendStatus(200);
    }).catch(err => console.log(err))
});


//Post
router.post('/create', (req,res) => {
    db.bugs.create()
    .then(users => {
        console.log(users.id);
        res.redirect(`/bugs/${users.id}`);
        //res.redirect(`/bugs/${users.id}`);
        //invokeGet(user.id);
    })
    .catch(err => console.log(err))
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
        {where: {
            id :req.params.id
        }}
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