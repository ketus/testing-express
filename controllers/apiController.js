module.exports = function (app) {

	app.get('/api/person:id', function (req, res) {
		res.json({
			id: req.params.id,
			name: 'wat',
			lastname: 'watWat'});
	});

	app.post('/api/person/', function (req, res) {
		//save to db
	});

	app.delete('/api/person/:id', function (req, res) {
		//delete from db
	});

};