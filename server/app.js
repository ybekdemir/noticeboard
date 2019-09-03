var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var noticesRouter = require('./routes/notices');
var statsRouter = require('./routes/stats');

var app = express();


app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/notices', noticesRouter);
app.use('/stats', statsRouter);

app.use('/', express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);

  // set locals, only providing error in development
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
