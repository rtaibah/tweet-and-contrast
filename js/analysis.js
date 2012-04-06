//Here's the script to access the Twitter API. I also created a function (getHashtag) that takes user input and stores it as a variable to be added to the JSON GET request.

// global vars
var hashTagKeyCSV = '';
var hashTagKeyArray = ["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN"];
var hashTagDict = {ONE:10, TWO:20, THREE:30,FOUR:30,FIVE:30,SIX:30,SEVEN:30,EIGHT:80,NINE:90,TEN:100};
var errorMessage = "";
var searchTag = true;
var user1Hashtag;

function computeHashtag(){   
  alert (user1Hashtag);
}

/*                
$(document).ready(function() {
;}*/