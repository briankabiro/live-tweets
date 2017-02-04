/*App for displaying twitter feed according to hashtag 100 days of code
use github to host project
get twitter api key
test api key

setup express server, add / route and allow for button that initiates the call to api
enter the app, click search it runs through the stream and returns them
writes them to a file and then closes connection
iterates and upon finish and writes them to the DOM
 */
var fs = require('fs');
var path = require('path');

var express = require('express'),
	tester = require('./tester.js'),
	app = express();
	server = require('http').Server(app);
	io = require('socket.io')(server);

app.use('/public', express.static(path.join(__dirname + '/public')));

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
			console.log('data saved');		
		}
	})
};

io.on('connection', function(socket){
	socket.on('getTweets',function(){
		function getFromTwitter(){
			twitter.getSearch({'q':'#100daysofcode', 'count':5}, error, success);
		}
		getFromTwitter.then(sortTweets)
		var sortTweets = function(){
			console.log('Compiling Tweets');
			var tweetData = tester.tweetAnalyzer();
			console.log('Sending Tweets');
		}
		getTweets.then(sortTweets, console.error)
		sortTweets.then(socket.emit('tweets', tweetData), console.error)
		}
		getTweets();
	})
});


app.get('*', function(req,res){
	res.sendFile(__dirname + '/index.html');
})

server.listen(8080);

