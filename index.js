var connect = require('connect');
var http = require('http');
var debug = require('debug')('wh');
var app = connect();

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Print all incoming requests, then respond to them.
app.use(function (req, res) {
    debug('incoming webhook',
        req.method,
        req.url,
        req.body
    );
    res.end('OK\n');
});

// create node.js http server and listen on port
var server = http.createServer(app);
server.on('error', function (err) {
    debug('server error', err);
});
server.listen(3001, function () {
    debug('Respoke webhook server is listening on port 3001')
});
