"use strict";

var express = require('express');
var jade = require('jade');
var favicon = require('serve-favicon');
var apiCtrl = require('./server/controllers/apiController');
var htmlCtrl = require('./server/controllers/htmlController');
var db = require('./server/models/user');
var path = require('path');

var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'static', 'favicon.gif')));



app.use('/', function (req, res, next) {
	db.User.find({}, function (err, data) {
		if(err) console.log(err);

		var userData = data;
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