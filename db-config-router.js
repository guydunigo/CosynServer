const express = require('express');
const { Database, CONF_COL, PLAY_COL } = require('./db');

const KEYBOARDS = require('./keyboards.json');

/*
const CONF_COL = 'keyBoards';
const PLAY_COL = 'playKeyBoards';
*/

Database((db) => {
    const col = db.collection(CONF_COL);
    col.count().then((c) => {
        if (c === 0) {
            col.insertMany(KEYBOARDS);
            console.log(`Config - Collection ${CONF_COL} filled with the Json file.`);
        }
    });
});

const findNewId = function (colName, baseId) {
    return Database(db =>
        db.collection(colName)
            .find({})
            .toArray()
            .then(list => {
                let found = false;
                let counter = -1, prev_counter = -1;
                const base = baseId.replace(/[#$ /\\]/g, '_');
                let name = base;

                while (!found) {
                    name = counter === -1 ? base : `${base}_${counter}`;
                    prev_counter = counter;
                    for (const elmt of list) {
                        if (elmt.id === name) {
                            counter++;
                            break;
                        }
                    }
                    if (prev_counter === counter) // found
                        found = true;
                }
                return Promise.resolve(name);
            })
    );
};

const dbRouter = express.Router();

dbRouter.route('/reset')
    .get((req, res) => {
        Database(db => {
            const col = db.collection(CONF_COL);
            col.drop();
            col.insertMany(KEYBOARDS);
            console.log(`Config - Collection ${CONF_COL} filled with the Json file.`);
        });
        console.log(`Config - Collection ${CONF_COL} reset`);
        return res.send('Db reset');
    });

dbRouter.route('/')
    .get((request, response) => {
        Database(db =>
            db.collection(CONF_COL)
                .find({})
                .toArray((err, keyBoards) => {
                    if (!err) {
                        response.json(keyBoards.map(kb => { kb.keys = undefined; return kb; }));
                        console.log('Config - Keyboards served');
                    }
                    else console.error('Failed to get the beers list');
                })
        );
    })
    .post((request, response) => {

        if (request.body.name) {
            const kb = request.body;
            findNewId(CONF_COL, request.body.name)
                .then(id => {
                    kb.id = id;
                    kb.keys = [];

                    Database(db => db.collection(CONF_COL)
                        .insert(kb)
                        .then(() =>
                            console.log(`Config - Keyboard ${kb.id} added`)));
                    return response.json(kb);
                });
        }
        else {
            console.log('ERROR # Config - Keyboard add error : No name specified');
            return response.send('ERROR # Config - Keyboard add error : No name specified');
        }
    });

dbRouter.route('/:keyBoard_id')
    .get((request, response) => {
        Database(db => {
            //console.log(db);
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    //console.log(keyBoard);
                    keyBoard.keys = undefined;
                    console.log(`Config - Keyboard ${request.params.keyBoard_id} served`);
                    response.json(keyBoard);
                });
        }
        );
    })
    .put((request, response) => {
        if (request.body.name) {
            Database(db =>
                db.collection(CONF_COL)
                    .updateOne({ id: request.params.keyBoard_id }, {
                        $set: { name: request.body.name }
                    })
                    .then(db => {
                        console.log(`Config - Keyboard ${request.params.keyBoard_id} updated`);
                        return response.json(db);
                    })
            );

        }
        else {
            console.log(`ERROR # Config - Keyboard ${request.params.keyBoard_id} update error : No name specified`);
            return response.send('ERROR # Config - Keyboard add error : No name specified');
        }
    })
    .delete((request, response) => {
        Database(db => {
            db.collection(CONF_COL)
                .findOneAndDelete({ id: request.params.keyBoard_id })
                .then(kb => {
                    console.log(`Config - Keyboard ${request.params.keyBoard_id} deleted`);
                    response.json(kb);
                });
        });
    });

dbRouter.route('/:keyBoard_id/lock')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db => {
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(kb => {
                    kb._id = undefined;
                    db.collection(PLAY_COL)
                        .findOne({ id: kb.id })
                        .then(kbs => {
                            if (kbs === null) {
                                db.collection(PLAY_COL).insert(kb);
                                console.log(`Config - Keyboard ${request.params.keyBoard_id} locked`);

                                response.json(kb);
                            }
                            else {
                                // find new id
                                response.json('id already use in play list').send();
                            }
                        });

                });
        });
    });

dbRouter.route('/:keyBoard_id/keys')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    response.json(keyBoard.keys).send();
                }
                )
        );
    });

dbRouter.route('/:keyBoard_id/keys/:key_id')
    .get((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        Database(db =>
            db.collection(CONF_COL)
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
    Database(db => db.collection(CONF_COL).insert(request.body))
    return response.json(request.body).send();
})*/


exports.dbRouter = dbRouter;

