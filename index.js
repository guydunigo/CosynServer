const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfigRouter = require('./db-config-router').dbRouter;
const dbPlayRouter = require('./db-play-router').dbPlayRouter;

const PORT = 4300;

const app = express();

app.use(cors());


// ----- Display static folder as public -----
app.use('/', express.static('app'));
// ----------
app.get('/', (req, res) => res.redirect('index.html'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/config', dbConfigRouter);
app.use('/api/play', dbPlayRouter);

app.use('/sounds', express.static('sounds'));

// ---- redirect unknown path
app.get('/play/*', (req, res) => res.redirect('..'));
app.get('/config/*', (req, res) => res.redirect('..'));


app.listen(PORT, () => console.log('Web app started on port ' + PORT + '. '));