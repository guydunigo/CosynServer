const express = require('express');
const Database = require('./db');

const dbPlayRouter = express.Router();
dbPlayRouter.route('/')
    .options((request,response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send('Ok');
    })
    .get((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
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
    .options((request,response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send('Ok');
    })
    .get((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection('playKeyBoards')
                .find({id:request.params.keyBoard_id})
                .then(boards => response.json(boards).send()) // fonctionne ??  > find not a function
        )
    })
    .delete((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection('playKeyBoards')
                .findOneAndDelete({id:request.params.keyBoard_id}))
    })

exports.dbPlayRouter = dbPlayRouter;
