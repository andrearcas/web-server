module.exports = {

	requireAuthentication: function(req, res, next) {
		console.log('Private route');
		next();
	}, logger: function (req, res, next) {
		var date = new Date().toString();
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}