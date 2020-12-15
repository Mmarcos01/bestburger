var response;

function getUserPrompt(){
	var promptQuestion = "Do you like burgers?";
	response = prompt(promptQuestion);
}
getUserPrompt();

var alertMessage;
var color;

function giveReply(response) {
	
  if (response === "yes") {
	alertMessage = "You're in the right place!";
	color= "white";
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

//var colorOnResponse;

function setColorBasedOnUserInput(rsp) {

 if (rsp === "yes") {
	color = "black";
} else if (rsp === "no") {
	color = "grey";
} else {
	color = "brown";
}

document.getElementById("content").style.backgroundColor = color;
}

var elements = document.getElementById("content")

setColorBasedOnUserInput(response);

//element.backgroundColors = colorOnResponse; not sure what this is
//element.style.background = colorOnResponse;