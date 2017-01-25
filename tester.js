var fs = require('fs');

fs.readFile('data.txt', 'utf-8', function(err,data){
	if(err) console.error(err);
	else{
		var newData = JSON.parse(data);
		var dataArray =  newData.statuses;
		for(var i = 0; i <= dataArray.length; i++){
			var tweet = dataArray[i].text;
			var entities = dataArray[i].entities;
			var user_mentions = entities.user_mentions;
			for(var i = 0; i < user_mentions.length; i++){
				var name = (user_mentions[0].name)
			}
			console.log(name +':'+tweet);
		}

		
		/* Set a listener on the stream and callback on new tweet
		Fix for loop issue*/
		}
});