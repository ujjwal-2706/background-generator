var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.querySelector(".button1");

function RandomColor(){
	var colorcode = "";
	while (colorcode.length !== 6){
		colorcode = colorcode + Math.floor(Math.random()* 10).toString();
	}
	colorcode = "#" + colorcode;
	return colorcode;
}
function set1(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ RandomColor()
	+ ", " 
	+ RandomColor()
	+ ")";

	css.textContent = body.style.background + ";";	
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
button1.addEventListener("click",set1);