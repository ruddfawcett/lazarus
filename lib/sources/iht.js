var Q = require('q');
var keys = require('../keys');

var client = require('../client');

module.exports = {
  fetch: function() {
    var deferred = Q.defer();
    var key = keys.NYTIMES_API_KEY || process.env.NYTIMES_API_KEY;
    var url = 'http://api.nytimes.com/svc/news/v3/content/iht/all/168.json?api-key='+key+'&limit=10';

    client.get(url, function(data) {
      var results = data.results;

      results.forEach(function(result) {
        result.source = 'iht';

        delete result.subheadline;
        delete result.updated_date;
        delete result.created_date;
        delete result.thumbnail_standard;
        delete result.abstract;
        delete result.section;
        delete result.subsection;
        delete result.item_type;
        delete result.material_type_facet;
        delete result.kicker;
        delete result.des_facet;
        delete result.org_facet;
        delete result.per_facet;
        delete result.geo_facet;
        delete result.multimedia;
        delete result.related_urls;
      });

      deferred.resolve(results);
    });

    return deferred.promise;
  }
}
