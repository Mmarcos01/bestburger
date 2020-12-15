console.log("Welcome!");

var response;

function getUserPrompt(){
	var promptQuestion = "Do you like burgers?";
	response = prompt(promptQuestion);
	console.log(response);
}
getUserPrompt();

var alertMessage;
var color;

function giveReply(response) {
	
	if (response === "yes") {
	alertMessage = "You're in the right place!";
	color= "#00FF00";
} else if (response === "no") {
	alertMessage = "Stick around for your burger-loving friends.";
	color= "#00FF00";
} else {
	alertMessage = "That's awesome!";
	color= "#0000FF";
}}

giveReply(response);

alert(alertMessage);

var element = document.getElementById('response-output')

element.innerText = alertMessage;
element.style.color = color;

var color;

function setBackgroundColorByInput(resp) {

 if (resp === "yes") {
	color = "beige";
} else if (resp === "no") {
	color = "lightpink";
} else {
	color = "grey";
}

document.getElementById("content").style.backgroundColor = color;
}

setBackgroundColorByInput(resp);