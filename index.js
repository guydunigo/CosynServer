const express = require('express');
const bodyParser = require('body-parser');

const beerRouter = require('./router-sample').beerRouter;

const app = express();

const PORT = 4300;

app.get('/', (request, response) => response.send('Hello dear students !'));

// ----- Router -----
const todoRouter = express.Router();
todoRouter.route('/')
    .get((request, response) => response.send('Get list todos'))
    .post((request, response) => response.send('Add a todo'))
    .put((request, response) => response.send('edit a todo'))
    .delete((request, response) => response.send('edit a todo'));

app.use('/todo', todoRouter);
// ----------

// ----- Display static folder as public -----
app.use('/static', express.static('public'));
// ----------
app.get('/static', (req, res) => res.redirect('static/index.html'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/beers', beerRouter);

app.listen(PORT, () => console.log('Web app started on port ' + PORT + '. '));