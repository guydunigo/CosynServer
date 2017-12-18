const express = require('express');
const { Database, PLAY_COL } = require('./db');

const dbPlayRouter = express.Router();

dbPlayRouter.route('/reset')
    .get((req, res) => {
        Database(db => {
            const col = db.collection(PLAY_COL);
            col.drop();
            console.log(`Play - Collection ${PLAY_COL} filled with the Json file.`);
        });
        console.log(`Play - Collection ${PLAY_COL} reset`);
        return res.send(`Play - Collection ${PLAY_COL} reset`);
    });

dbPlayRouter.route('/')
    .get((request, response) => {
        Database(db =>
            db.collection(PLAY_COL)
                .find({})
                .toArray((err, keyBoards) => {
                    if (!err) response.json(keyBoards);
                    else console.error('Failed to get the play_keyboards list');
                })
        );
    });

dbPlayRouter.route('/:keyBoard_id')
    .get((request, response) => {
        Database(db =>
            db.collection(PLAY_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(boards => response.json(boards))
        );
    })
    .delete((request, response) => {
        Database(db =>
            db.collection(PLAY_COL)
                .findOneAndDelete({ id: request.params.keyBoard_id })
                .then(kb => response.json(kb)));
    });

dbPlayRouter.route('/:keyBoard_id/keys/:key_id')
    .get((request, response) => {
        Database(db =>
            db.collection(PLAY_COL)
                .findOne({ id: request.params.keyBoard_id })
                .then(kb => {
                    const key = kb.keys.find(key => key.id === request.params.key_id);
                    response.json(key);
                })
        );
    });

dbPlayRouter.route('/:keyBoard_id/keys/:key_id/press')
    .put((request, response) => {
        Database(db =>
            db.collection(PLAY_COL)
                .updateOne({ id: request.params.keyBoard_id, 'keys.id': request.params.key_id }, { $set: { 'keys.$.enabled': true } })
        );
    });

dbPlayRouter.route('/:keyBoard_id/keys/:key_id/release')
    .put((request, response) => {
        Database(db =>
            db.collection(PLAY_COL)
                .updateOne({ id: request.params.keyBoard_id, 'keys.id': request.params.key_id }, { $set: { 'keys.$.enabled': false } })
        );
    });

dbPlayRouter.route('/:keyBoard_id/keys/:key_id/volume')
    .put((request, response) => {
        console.log(request.body.volume);
        Database(db =>
            db.collection(PLAY_COL)
                .updateOne({ id: request.params.keyBoard_id, 'keys.id': request.params.key_id }, { $set: { 'keys.$.volume': Number.parseInt(request.body.volume) } })
        );
    });


exports.dbPlayRouter = dbPlayRouter;
