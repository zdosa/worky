var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(7999, function() {
	console.log('listening on port 7999');
});