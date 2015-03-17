'use strict';

/**
 * Requires connect and serve-static node modules.
 * Install modules:
 * npm install connect serve-static
 * */
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic('../angularjs'));
app.listen(5000);