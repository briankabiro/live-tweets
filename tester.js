/* 
	Fix for loop issue
	Set a listener on the stream and callback on new tweet
	Render to dom
*/

var fs = require('fs');
module.exports = {
	tweetAnalyzer:function(){
	fs.readFile('data.txt', 'utf-8', function(err,data){
	if(err) console.error(err);
	else{
		var tweetsArray = [];
		var newData = JSON.parse(data);
		var dataArray =  newData.statuses;
		
		for(var i = 0; i <= dataArray.length-1; i++){
			
			var tweet = dataArray[i].text;

			var entities = dataArray[i].entities;
			
			var user_mentions = entities.user_mentions;
			
			var user = dataArray[i].user;

			if(user){
				for(var name in user){
					var name = user.name;
				}
			}else{
				for(var i = 0; i < user_mentions.length; i++){
				var name = (user_mentions[0].name)
				}	
			}
			
			//console.log(name+ ':' +tweet +'\n')
			tweetsArray.push({"user_name":name,"tweet_text":tweet});
		}
		console.log('finished compiling tweets and name');	
		
		return(tweetsArray); 	
		}
	});	

	}

}
