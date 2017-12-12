const express = require('express');
const bodyParser = require('body-parser');

const dbConfigRouter = require('./db-router').dbRouter;
const dbPlayRouter = require('./db-play-router').dbPlayRouter;

const app = express();

const PORT = 4300;

// ----- Display static folder as public -----
app.use('/', express.static('app'));
// ----------
app.get('/', (req, res) => res.redirect('index.html'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/config', dbConfigRouter);
app.use ('/api/play', dbPlayRouter);

app.listen(PORT, () => console.log('Web app started on port ' + PORT + '. '));