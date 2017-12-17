const express = require('express');
const { Database, CONF_COL, PLAY_COL } = require('./db');

const KEYBOARDS = require('./keyboards.json');

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
            .then(list =>
                Promise.resolve(findNewIdList(list, baseId)))
    );
};

const findNewIdList = function (list, baseId) {
    let found = false;
    let counter = -1, prev_counter = -1;
    const base = baseId.trim().replace(/[#$ /\\]/g, '_');
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

    return name;
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
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
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
        Database(db => {
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(kb => {
                    kb._id = undefined;
                    findNewId(PLAY_COL, kb.name)
                        .then(id => {
                            kb.id = id;
                            db.collection(PLAY_COL).insert(kb);
                            console.log(`Config - Keyboard ${request.params.keyBoard_id} locked`);
                            return response.json(kb);
                        });
                });
        });
    });

dbRouter.route('/:keyBoard_id/keys')
    .get((request, response) => {
        Database(db =>
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    console.log(`Config - Keys from keyboard ${request.params.keyBoard_id} served`);
                    return response.json(keyBoard.keys);
                })
        );
    })
    .post((request, response) => {
        const key = request.body;
        if (key.name && key.src) {
            Database(db => db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(kb => {
                    key.id = findNewIdList(kb.keys, key.name);
                    db.collection(CONF_COL)
                        .updateOne({ id: request.params.keyBoard_id }, {
                            $addToSet: {
                                keys: key
                            }
                        });
                    console.log(`Config - Key ${key.id} in keyboard ${request.params.keyBoard_id} added`);
                    return response.json(key);
                })
            );
        }
        else {
            console.log(`ERROR # Config - Key in keyboard ${request.params.keyBoard_id} add error : No name or src specified`);
            return response.send(`ERROR # Config - Key in keyboard ${request.params.keyBoard_id} add error : No name or src specified`);
        }
    });

dbRouter.route('/:keyBoard_id/keys/:key_id')
    .get((request, response) => {
        Database(db =>
            db.collection(CONF_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(keyBoard => {
                    const key = keyBoard.keys.find(key => key.id === request.params.key_id);
                    console.log(`Config - Key ${key.id} in keyboard ${request.params.keyBoard_id} served`);
                    return response.json(key);
                })
        );
    });

exports.dbRouter = dbRouter;

