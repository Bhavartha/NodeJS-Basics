const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/:query', (req, res) => {
    res.render('index', { searchQuery: req.params.query, results: ['Data Structures', 'Machine Learning'] });
});

app.listen(8080);