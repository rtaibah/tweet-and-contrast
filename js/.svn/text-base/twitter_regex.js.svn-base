String.prototype.parseURL = function() {
	return this.match(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
		return url;
	});
};
//test = "Simon Whatley's online musings can be found at: http://www.simonwhatley.co.uk";
//document.writeln(test.parseURL());

String.prototype.parseUsername = function() {
	return this.match(/[@]+[A-Za-z0-9-_]+/g, function(u) {
		var username = u.replace("@","")
		return username;
		//return u.link("http://twitter.com/"+username);
	});
};
//test = "@whatterz is writing a post about JavaScript";
//document.writeln(test.parseUsername());

String.prototype.parseHashtag = function() {
	return this.match(/[#]+[A-Za-z0-9-_]+/g, function(t) {
		var tag = t.replace("#","%23")
		//return t.link("http://search.twitter.com/search?q="+tag);
		return tag;
	});
};
//test = "Simon is writing a post about #twitter, #javascript and parsing hashtags as URLs";
//document.writeln(test.parseHashtag());