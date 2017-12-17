const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:4400/keyboards';
const CONF_COL = 'keyBoards';
const PLAY_COL = 'playKeyBoards';

let DBInstance = null;
MongoClient.connect(url).then(db => DBInstance = db);


module.exports = {
    Database: (cb) => {
        if (DBInstance === null) {
            MongoClient.connect(url, (error, db) => {
                console.log('Connected correctly to server');
                DBInstance = db.db('keyboards');
                return cb(DBInstance);
            });
        }
        else
            return cb(DBInstance);
    },
    CONF_COL,
    PLAY_COL
};