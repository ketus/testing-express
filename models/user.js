var mongoose = require('mongoose');
var dbURL = require('./dbPass');

mongoose.connect(dbURL);

var User = mongoose.model('User', new mongoose.Schema({
	firstName: String,
	lastName: String,
	userName: String
	})
);


var saveUser = function(firstName, lastName, userName) {
	var user = new User({
		firstName: firstName,
		lastName: lastName,
		userName: userName || firstName + ' ' + lastName
	});

	user.save(function (err) {
		if (err) throw err;
		console.log(firstName + ' ' + lastName + ' saved to db');
	});
};

module.exports =  {
	User: User,
	saveUser: saveUser
};


