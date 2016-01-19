"use strict";

var express = require('express');
var jade = require('jade');
var favicon = require('serve-favicon');
var apiCtrl = require('./controllers/apiController');
var htmlCtrl = require('./controllers/htmlController');
var db = require('./models/user');



var port = process.env.PORT || 3000;

var app = express();

app.use(favicon(__dirname + '/favicon.gif'), function (rqe, res, next) {
	next();
});

app.use('/', function (req, res, next) {
	db.User.find({}, function (err, data) {
		if(err) console.log(err);

		console.log('Fetched user: ' + data);
	});
	next();
});

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');

//db.saveUser('Max', 'Kolonko', 'Ketus');

app.listen(port, function () {
	console.log('listening on port: ' + port);
});

apiCtrl(app);
htmlCtrl(app);