'use strict';
var connect = require('connect');
var http = require('http');
var debug = require('debug')('wh');
var app = connect();
var format = function (input) { return JSON.stringify(input, null, 2); };
var port = 3009;

// Parse JSON requests into `req.body`.
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Print all incoming requests, then respond to them.
app.use(function (req, res) {
    debug('incoming webhook', req.method, req.url, format(req.body));
    res.end('OK\n');
});

// create node.js http server and listen on port 3009
var server = http.createServer(app);
server.on('error', function (err) {
    debug('server error', err);
});
server.listen(port, function () {
    debug('Respoke webhook server is listening on port', port);
});
