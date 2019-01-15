var lunchPlaces = ['Chilis','Outback','McDonalds'];

var durangos = {
	name: 'Durangos',
	type: 'Tex-Mex',
	address: 'River Road',
	owner: 'Max'
};


var heading = document.querySelector("h1");
var button = document.querySelector("#the-button");
console.log("my button is",button);
button.onclick = function() {
	heading.innerHTML = "You clicked me!";
	heading.style.color = "#00FF00";
	heading.style.backgroundColor = "red";

	var nameInput = document.querySelector('#name')

	var lunchVenueInput = document.querySelector('#lunch-venue');

	var theList = document.querySelector("#the-list");
	console.log("Here is my list",theList);

	var newItem = document.createElement("li");
	if (lunchVenueInput.value == "Home"){
		newItem.innerHTML = nameInput.value + " wants to go " + lunchVenueInput.value + "!";
	} else {
		newItem.innerHTML = nameInput.value + " wants to go to " + lunchVenueInput.value + "!";
	}
	theList.appendChild(newItem);
}
