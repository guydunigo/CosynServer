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
    .get((request, response)=>{
        Database(db => 
            db.collection('keyBoards')
                .find({})
                .toArray((err, keyBoards) => {
                    if (!err) response.json(keyBoards.map(x => x.name));
                    else console.error('Failed to get the beers list');
                })
        );
    })
    .post((request,response)=>{
        //console.log(request.body)
        Database(db => db.collection('keyBoards').insert(request.body))
        return response.json(request.body).send();
    })

dbRouter.route('/:keyBoard_id')
    .get((request,response)=>{
        //console.log(typeof request.params.keyBoard_id);
        Database(db => {
            //console.log(db);
            db.collection('keyBoards')
                    .findOne({id: request.params.keyBoard_id})
                    .then(keyBoard =>{
                        //console.log(keyBoard);
                        response.json(keyBoard)
                    });
        }
        );
    })
    .put((request, response)=>{
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
        keyBoards = keyBoards.filter(keyBoard => keyBoard.id !== request.params.keyBoard_id)
        Database(db => {
            db.collection('keyBoards')
                .findOneAndDelete({id: request.params.keyBoard_id})
        });
    });

    exports.dbRouter = dbRouter;

