var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

module.exports = function (app) {

	app.get('/', function (req, res, next) {
		res.render('index', { title: req.params.test });
	});

	app.post('/test', urlencodedParser, function (req, res) {
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});

	app.post('/test-json', jsonParser, function (req, res) {
		res.send('thx for json');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
		console.log(JSON.stringify(req.body))
	});

	app.get('/test', function (req, res) {
		res.render('restofit', {
			title: req.params.test,
			query: req.query.qstr
		});

	});

	app.get('/:test', function (req, res) {
		res.render('restofit', {title: req.params.test});
	});

};
