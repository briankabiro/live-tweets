/*App for displaying twitter feed according to hashtag 100 days of code
use socket io, vue js and webpack
use github to host project
get twitter api key
test api key

 */
var fs = require('fs');
var config = {
   "consumerKey" : "GJzKMZohpY1m3guTKIX1UCgk4",
	"consumerSecret" : "b5U5kfu3aF76QwAn9MFPbqMzqIZCbPQKUtEOKcTbKCAGsr2kkx",
	"accessToken" : "3326752241-Ly1G0oJyKLM6H3oHdSRcRuqpcUiooF6sgDsHLlB",
	"accessTokenSecret" : "aiqY7ynjjRZLAARN78i5egMhSWhjWj2aOR1gSlEwB9j8Y",
	"callBackUrl" : ""
}

var Twitter = require('twitter-node-client').Twitter;

var twitter = new Twitter(config);

var error = function(err, response,body){
	console.error(err);
};
var success = function(data){
	fs.writeFile('data.txt', data, function(err){
		if(err) console.error(err)
		else{
			console.log('data saved')
		}
	})
}


twitter.getSearch({'q':'#100daysofcode', 'count':10}, error, success);
