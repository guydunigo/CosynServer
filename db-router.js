const express = require('express');
const Database = require('./db');

const KEYBOARDS = require('./keyboards.json');

Database((db) => {
    const col = db.collection('keyBoards');
    col.count().then((c) => {
        if (c === 0) {
            col.insertMany(KEYBOARDS);
            console.log('keyboards collection filled with the Json file.');
        }
    });
});

const dbRouter = express.Router();

dbRouter.route('/reset')
    .get((req, res) => {
        Database(db => {
            const col = db.collection('keyBoards');
            col.drop();
            col.insertMany(KEYBOARDS);
            console.log('keyboards collection filled with the Json file.');
        });
        console.log('Db reset');
        return res.send('Db reset');
    });

dbRouter.route('/')
    .get((request, response) => {
        Database(db =>
            db.collection('keyBoards')
                .find({})
                .toArray((err, keyBoards) => {
                    if (!err) response.json(keyBoards);
                    else console.error('Failed to get the keyboards list');
                })
        );
    })
    .post((request, response) => {
        //console.log(request.body)
        const kb = request.body;
        kb.id = kb.name.replace(/[#$ /\\]/g, '_');
        kb.keys = [];

        Database(db => db.collection('keyBoards').insert(kb));
        return response.json(kb);
    });

dbRouter.route('/:keyBoard_id')
    .get((request, response) => {
        console.log(typeof request.params.keyBoard_id);
        Database(db => {
            //console.log(db);
            db.collection('keyBoards')
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    //console.log(keyBoard);
                    keyBoard.keys = undefined;
                    response.json(keyBoard);
                });
        }
        );
    })
    .put((request, response) => {
        // delete
        Database(db =>
            db.collection('keyBoards')
                .findOneAndDelete({ id: request.params.keyBoard_id })
                .then(() =>
                    console.log(`${request.params.keyBoard_id} deleted`))
        );
        // post
        Database(db =>
            db.collection('keyBoards')
                .insert(request.body)
                .then(() =>
                    console.log(`${request.params.keyBoard_id} added`))
        );
        return response.json(request.body);
    })
    .delete((request, response) => {
        Database(db => {
            db.collection('keyBoards')
                .findOneAndDelete({ id: request.params.keyBoard_id })
                .then(kb => response.json(kb));
        });
    });

dbRouter.route('/:keyBoard_id/lock')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db => {
            db.collection('keyBoards')
                .findOne({ id: request.params.keyBoard_id })
                .then(kb => {
                    kb._id = undefined;
                    db.collection('playKeyBoards')
                        .findOne({ id: kb.id })
                        .then(kbs => {
                            console.log(kbs);
                            kbs === null ?
                                (db.collection('playKeyBoards').insert(kb), response.json(kb).send()) : (
                                    response.json('id already use in play list').send());
                        });

                });
        });
    });

dbRouter.route('/:keyBoard_id/keys')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection('keyBoards')
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    response.json(keyBoard.keys).send();
                })
        );
    });

dbRouter.route('/:keyBoard_id/keys/:key_id')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection('keyBoards')
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    console.log(request.params.key_id);
                    const key = keyBoard.keys.find(key => key.id === request.params.key_id);
                    console.log(key);
                    response.json(key).send();
                }
                )
        );
    });
/*.post((request,response)=>{
    console.log(request.body)
    Database(db => db.collection('keyBoards').insert(request.body))
    return response.json(request.body).send();
})*/


exports.dbRouter = dbRouter;

