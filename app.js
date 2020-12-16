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
	
// do while is guaranteed to execute at least once
// ====================

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
}}

giveReply(response);

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




// 0-based indexing
for (var i = 0; i < 10; i++) {
	//body of for loop
	console.log(i);
}

validateUserPassword();
getUserPrompt();
alert(alertMessage);
setColorBasedOnUserInput(response); //calls the OUTSIDE variable of 'response' above