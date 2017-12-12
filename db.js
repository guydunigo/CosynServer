const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:9000/enibeers';
let DBInstance = null;
MongoClient.connect(url).then(db => DBInstance = db);


module.exports = (cb) => {
    if (DBInstance === null) {
        MongoClient.connect(url, (error, db) => {
            console.log('Connected correctly to server');
            DBInstance = db.db('enibeers');
            return cb(DBInstance);
        });
    }
    else
        return cb(DBInstance);
};