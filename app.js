var express = require('express');
var jade = require('jade');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
var port = process.env.PORT || 3000;

app.set('views', __dirname + '/front/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: req.params.test });
});

app.post('/post-test', urlencodedParser, function (req, res) {
  res.send('Yo!');
  console.log(req.body.firstName);
  console.log(req.body.lastName);
});

app.get('/:test', function (req, res, next) {
  res.render('index', { title: req.params.test });
  next();
});

app.get('/:test', function (req, res, next) {
  console.log('outputting from url: ' + req.params.test);
});

app.listen(port);

