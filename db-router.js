const express = require('express');
const Database = require('./db');

var keyBoards = require('./keyboards.json');

Database((db) => {
    const col = db.collection('keyBoards');
    col.count().then((c) => {
        if (c === 0) {
            col.insertMany(keyBoards);
            console.log('enibeers.beers colection filled with the Json file.');
        }
    });
});

const dbRouter = express.Router();
dbRouter.route('/')
   .options((request,response) => {
     response.setHeader('Access-Control-Allow-Origin', '*');
     response.send('Ok');
   })
    .get((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db => 
            db.collection('keyBoards')
                .find({})
                .toArray((err, keyBoards) => {
                    if (!err) response.json(keyBoards);
                    else console.error('Failed to get the beers list');
                })
        );
    })
    .post((request,response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        //console.log(request.body)
        Database(db => db.collection('keyBoards').insert(request.body))
        return response.json(request.body).send();
    })

dbRouter.route('/:keyBoard_id')
    .get((request,response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        console.log(typeof request.params.keyBoard_id);
        Database(db => {
            //console.log(db);
            db.collection('keyBoards')
                    .findOne({id: request.params.keyBoard_id})
                    .then(keyBoard =>{
                        console.log(keyBoard);
                        response.json(keyBoard)
                    });
        }
        );
    })
    .put((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        // delete
        keyBoards = keyBoards.filter(keyBoard => keyBoard.id !==  request.params.keyBoard_id)
        Database(db =>
            db.collection('keyBoards')
                .findOneAndDelete({id: request.params.keyBoard_id})
        );
        // post
        Database(db =>
        db.collection('keyBoards')
            .insert(request.body)
        );
        return response.json(request.body).send();
    })
    .delete((request, response)=>{
        response.setHeader('Access-Control-Allow-Origin', '*');
        //keyBoards = keyBoards.filter(keyBoard => keyBoard.id !== request.params.keyBoard_id)
        Database(db => {
            db.collection('keyBoards')
                .findOneAndDelete({id: request.params.keyBoard_id})
        });
    });

dbRouter.route('/:keyBoard_id/lock')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db => {
            db.collection('keyBoards')
                    .findOne({id: request.params.keyBoard_id})
                    .then(kb => {
                        kb._id = undefined;
                        db.collection('playKeyBoards')
                            .findOne({id:kb.id})
                            .then(kbs => { 
                                console.log(kbs); 
                                kbs === null?
                                (db.collection('playKeyBoards').insert(kb), response.json(kb).send()):(
                                response.json('id already use in play list').send());
                            });
                       
                    });
        })
    })

dbRouter.route('/:keyBoard_id/keys/:key_id')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection('keyBoards')
                .findOne({id: request.params.keyBoard_id})
                .then(keyBoard => {
                    console.log(request.params.key_id)
                    keys = keyBoard.keys.filter(key => key.id === request.params.key_id)
                    console.log(keys);
                    response.json(keys).send()}
                    )
        )
    })
    /*.post((request,response)=>{
        console.log(request.body)
        Database(db => db.collection('keyBoards').insert(request.body))
        return response.json(request.body).send();
    })*/
;


exports.dbRouter = dbRouter;

