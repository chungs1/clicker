var news;
var timesClickedStr = window.localStorage.getItem("timesClicked");
console.log(timesClickedStr);
if(isNaN(timesClickedStr)) {
	timesClickedStr = "0";
}
console.log(timesClickedStr);
var timesClicked = parseInt(timesClickedStr);

function refresh() {

}

function grabNews() {

}

function prompt() {

}

function main() {
	while(true) {

	}
}

function save() {
	console.log(timesClicked);
	timesCliked = timesClicked.toString();
	window.localStorage.setItem("timesClicked", timesClicked);
	console.log(window.localStorage.setItem("timesClicked", timesClicked));

}

function clicked() {
	timesClicked++;
	$("#numClicks").html(timesClicked);
	//$("#numClicks").innerHTML = timesClicked;
}

$(document).ready(function() {
	$("#numClicks").append(timesClickedStr);
	$("#click").click(function() {
		clicked();
	});
	$("#save").click(function() {
		save();
	})
})