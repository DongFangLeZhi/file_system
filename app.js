var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var api = require('./routes/endpoints/api')
var app = express();

mongoose.connect("mongodb://localhost/lezhi_DB");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:'ldt_session_secret',
    resave:true,
    saveUninitialized:true,
    cookie:{}
}))

app.use('/', routes);
app.use('/api/', api);

app.use(function(req, res, next){
  var user = req.session.user;
  next();
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(express["static"](path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
    app.use(errorhandler());
}

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
