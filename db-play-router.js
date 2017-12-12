const express = require('express');
const Database = require('./db');

const dbPlayRouter = express.Router();
dbPlayRouter.route('/')
    .get((request, response)=>{
        Database(db => 
            db.collection('playKeyBoards')
                .find({})
                .toArray((err, keyBoards) => {
                    if (!err) response.json(keyBoards);
                    else console.error('Failed to get the play_keyboards list');
                })
        );
    })

dbPlayRouter.route('/:keyBoard_id')
    .get((request, response)=>{
        Database(db =>
            db.collection('playKeyBoards')
                .find({id:request.params.keyBoard_id})
                .then(boards => response.json(boards).send()
            )
        )
    })

exports.dbPlayRouter = dbPlayRouter;
