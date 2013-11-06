var news;
var timesClickedStr = window.localStorage.getItem("timesClicked");
console.log(timesClickedStr);
if(isNaN(timesClickedStr)) {
	timesClickedStr = "0";
}
console.log(timesClickedStr);

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

function clicked() {
	var oldClicks = parseInt(timesClickedStr);
	console.log(oldClicks);
	oldClicks++;
	oldClicks = oldClicks.toString();
	window.localStorage.setItem("timesClicked", oldClicks);
	console.log(window.localStorage.setItem("timesClicked", oldClicks));
	$("#numClicks").innerHTML = "";
	$("#numClicks").innerHTML = oldClicks;
}

$(document).ready(function() {
	$("#numClicks").append(timesClickedStr);
	$("#click").click(function() {
		clicked();
	});
})