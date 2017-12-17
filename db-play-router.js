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
                .findOne({id: request.params.keyBoard_id})
                .then(boards => response.json(boards).send())
        )
    })
    .delete((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection('playKeyBoards')
                .findOneAndDelete({id:request.params.keyBoard_id})
                .then(kb => response.json(kb).send()));
    })

dbPlayRouter.route('/:keyBoard_id/keys/:key_id')
    .get((request, response) => {
        Database(db =>
            db.collection('playKeyBoards')
                .findOne({id: request.params.keyBoard_id})
                .then(kb => {
                        const key = kb.keys.find(key => key.id === request.params.key_id)
                        response.json(key).send();
                })
        );
    });

dbPlayRouter.route('/:keyBoard_id/keys/:key_id/toggle')
    .put((request, response) => {
        Database(db =>
            db.collection('playKeyBoards')
                .updateOne({id: request.params.keyBoard_id, "keys.id" : request.params.key_id}, {$set: {"keys.$.enabled": true}})
        );
    });

dbPlayRouter.route('/:keyBoard_id/keys/:key_id/volume')
    .put((request, response) => {
        console.log(request.body.volume);
        Database(db =>
            db.collection('playKeyBoards')
                .updateOne({id: request.params.keyBoard_id, "keys.id" : request.params.key_id}, {$set: {"keys.$.volume": Number.parseInt(request.body.volume)}})
        );
    });


exports.dbPlayRouter = dbPlayRouter;
