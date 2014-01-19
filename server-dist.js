
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public-dist'));

app.listen(3000);
console.log('Express app started on port 3000');