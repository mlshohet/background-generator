var h3 = document.querySelector("h3");

function displayCSS() {
	var body = document.getElementById("gradient");
	h3.textContent = body.style.background;
}


var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.getElementById("random");

var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	h3.textContent = body.style.background +";";
}

function randomColor() {
	return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function randomGradient() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

random.addEventListener("click", randomGradient);


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);