const express = require('express');
const Database = require('./db');

var beers = require('./beers-sample.json');

Database((db) => {
    const col = db.collection('beers');
    col.count().then((c) => {
        if (c === 0) {
            col.insertMany(beers);
            console.log('enibeers.beers colection filled with the Json file.');
        }
    });
});

const beerRouter = express.Router();
beerRouter.route('/')
    .get((request, response) => {
        Database(db =>
            db.collection('beers')
                .find({})
                .toArray((err, beers) => {
                    if (!err) response.json(beers.map(x => x.name));
                    else console.error('Failed to get the beers list');
                })
        );
    })
    .post((request, response) => {
        // Not secure !
        console.error('Not secure POST method used !');

        console.log('Beer "' + request.body.name + '" posted');
        Database(db => db.collection('beers').insert(request.body));

        return response.json(request.body).send();
    });
beerRouter.route('/:beer_id')
    .get((request, response) => {
        Database(db =>
            db.collection('beers')
                .findOne({ id: request.params.beer_id })
                .then(beer => response.json(beer))
        );
    })
    .delete((request, response) => {
        beers = beers.filter(beer => beer.id !== request.params.beer_id);

        // response.redirect(303,'/beers');

        // response.send('Beer ' + request.params.beer_id + ' deleted.');
        Database(db =>
            db.collection('beers')
                .findOneAndDelete({ id: request.params.beer_id })
        );

        response.json({}).send();
    });

exports.beerRouter = beerRouter;