/*App for displaying twitter feed according to hashtag 100 days of code
use socket io, vue js and webpack
use github to host project
get twitter api key
test api key

 */

var config = require('./data/twitter_config');

var Twitter = require('twitter-node-client').Twitter;

var twitter = new Twitter(config);

var error = function(err, response,body){
	console.error(err);
};
var success = function(data){
	console.log('Data [%s]', data)
}


twitter.getSearch({'q':'#100daysofcode', 'count':10}, error, success);
