var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname, ''));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/users', function(req, res) {
	var data = [{name: 'pavan', location: 'Hyderabad'}];
	res.send(JSON.stringify(data));
});

app.listen(8070);
console.log('Now, Server is running!...');
