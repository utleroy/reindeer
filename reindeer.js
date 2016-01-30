var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

for (var i = 0; i < reindeer.length; i++) {  // reindeer.length is referring to line 2. length of reindeer. "i" referring to "increments"
	hohohoElement.innerHTML += "<div>" + colors[i] + " " + reindeer[i] + "</div>"; // "+=" is linking line 5 to line 8 and display all of the contents.
};