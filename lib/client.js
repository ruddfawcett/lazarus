var unirest = require('unirest');

module.exports = {
  get: function(url, callback) {
    unirest.get(url).end(function(response) {
      var data = JSON.parse(response.raw_body);

      callback(data);
    });
  }
}
