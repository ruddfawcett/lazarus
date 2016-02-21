var shuffle = require('shuffle-array');

var guardian = require('./sources/guardian');
var iht = require('./sources/iht');
var nytimes = require('./sources/nytimes');

module.exports = {
  fetch: function(req, res) {
    var unshuffled = [];

    guardian.fetch().then(function(articles) {
      unshuffled.push.apply(unshuffled, articles);
    })
    .then(iht.fetch).then(function(articles) {
      unshuffled.push.apply(unshuffled, articles);
    })
    .then(nytimes.fetch).then(function(articles) {
      unshuffled.push.apply(unshuffled, articles);
    }).done(function() {
      res.json(shuffle(unshuffled));
    });
  }
}
