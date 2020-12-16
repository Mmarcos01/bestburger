// always put function declarations at the top and the rest at the bottom
var response; //reused variable should be on top
var alertMessage;
var color;

function validateUserPassword() {
	var storedPassword = "123";
	var userPassword = ""; // variable that will hold user input
	while(userPassword !== storedPassword){ // while the user gives invalid password
		userPassword = prompt('input password');
	}
}

function getUserPrompt(){
	var promptQuestion = "Do you like burgers?";
	response = prompt(promptQuestion);
}

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
	}

	var element = document.getElementById('response-output');

	element.innerText = alertMessage;
	element.style.color = color;
}

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

//for (var i = 0; i < 10; i++) {
//	console.log(i);
//}

validateUserPassword();
getUserPrompt();
giveReply(response);
alert(alertMessage);
setColorBasedOnUserInput(response); //calls the OUTSIDE variable of 'response' above

//var numberGiven = getUserPrompt("How many burgers do you want?");
//for (var i = 0; i < numberGiven; i++) {

	//console.log(i);
	//addBurgToDocument("hamburglar");

//function addImage() {
	//var img