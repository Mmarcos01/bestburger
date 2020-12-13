console.log("Welcome!");

var promptQuestion = "Do you like burgers?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
var color;

if (response === "yes") {
	alertMessage = "You're in the right place!";
	color= "#00FF00";
} else if (response === "no") {
	alertMessage = "Stick around for your burger-loving friends.";
	color= "#00FF00";
} else {
	alertMessage = "That's awesome!";
	color= "#0000FF";
}
    
alert(alertMessage);

var element = document.getElementById('response-output')

element.innerText = alertMessage;
element.style.color = color;