//Node http
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello Word');
});
app.get('/homepage', function (req, res) {
    res.send('Hello Word2');
});
app.get('/*', function (req, res) {
    res.send('No encontrado');
});
app.listen(8081);
