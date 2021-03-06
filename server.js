var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool
var config = {
    user:'subashr9803',
    database:'subashr9803',
    host: 'subashr9803@ssh.imad.hasura-app.io'
    port: '5432'
    password: DB_PASSWORD
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article -one',function(req,res) {
    res.send('article one is requeseted and served here');
});
app.get('/article -two',function(req,res) {
    res.send('article two is requeseted and served here');
});
app.get('/article -three',function(req,res) {
    res.send('article three is requeseted and served here');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
