function tweetFeed(){
	var xhttp = new XMLHttpRequest();
	xhtttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status == 200){
			document.getElementById('feed').innerHTML = this.responseText;
		}
	};
	xhttp.open("GET","server.js", true);
	xhttp.send();	
}
