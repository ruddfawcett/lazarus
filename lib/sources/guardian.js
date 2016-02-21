var Q = require('q');
var keys = require('../keys');

var client = require('../client');

module.exports = {
  fetch: function() {
    var deferred = Q.defer();
    var key = keys.GUARDIAN_API_KEY || process.env.GUARDIAN_API_KEY;
    var url = 'http://content.guardianapis.com/search?show-fields=byline%2Cheadline&api-key='+key+'&page-size=10';

    client.get(url, function(data) {
      var results = data.response.results;

      results.forEach(function(result) {
        result.title = result.fields.headline;
        result.url = result.webUrl;
        result.byline = 'By ' + result.fields.byline;
        result.source = 'guardian';
        result.published_date = result.webPublicationDate;

        delete result.id;
        delete result.sectionId;
        delete result.fields;
        delete result.webPublicationDate;
        delete result.type;
        delete result.webTitle;
        delete result.webUrl;
        delete result.apiUrl;
        delete result.sectionName;
      });

      deferred.resolve(results);
    });

    return deferred.promise;
  }
}
