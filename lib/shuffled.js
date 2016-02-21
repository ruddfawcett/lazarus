var shuffle = require('shuffle-array');

var guardian = require('./sources/guardian');
var iht = require('./sources/iht');
var nytimes = require('./sources/nytimes');

module.exports = {
  fetch: function(callback) {
    var unshuffled = [];

    guardian.fetch(function(articles) {
      unshuffled.push.apply(unshuffled, articles);

      iht.fetch(function(articles) {
        unshuffled.push.apply(unshuffled, articles);

        nytimes.fetch(function(articles) {
          unshuffled.push.apply(unshuffled, articles);

          callback(shuffle(unshuffled));
        });
      });
    });
  }
}
