var Q = require('q');
var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/nytimes', function(req, res) {
  var nytimes = require('./lib/sources/nytimes');
  nytimes.fetch().then(function(articles) {
    res.json(articles);
  });
});

router.get('/iht', function(req, res) {
  var iht = require('./lib/sources/iht');

  iht.fetch().then(function(articles) {
    res.json(articles);
  });
});

router.get('/guardian', function(req, res) {
  var guardian = require('./lib/sources/guardian');

  guardian.fetch().then(function(articles) {
    res.json(articles);
  });
});

router.get('/shuffled', function(req, res) {
  var shuffled = require('./lib/shuffled');

  shuffled.fetch(req, res);
});

app.use('/api/v1/articles', router);

app.use('*', function(req, res) {
  res.json({error: 'Nothing to see here... yet.'});
});

app.listen(port, function () {
  console.log('Lazarus is listening on port', port+'.');
});
