var colors = ["lightsalmon", "lightseagreen", "lightskyblue", "lightgoldenrodyellow", "lightgrey", "lightpink"];
var subContainers = [];
var dots = [];

// Create dots
for (i = 0; i < colors.length; i++) {
	// Create a container for each dot
	subContainers[i] = document.createElement("div");
	subContainers[i].style.paddingLeft = countPadding(colors, i);
	document.getElementById("container").appendChild(subContainers[i]);
	// Create dots inside their containers
	dots[i] = document.createElement("div");
	dots[i].classList.add("dot");
	dots[i].style.backgroundColor = colors[i];
	subContainers[i].appendChild(dots[i]);
}

function shuffleDots() {
	// Shuffle order in random
	for (i = 0; i < subContainers.length; i++) {
		var randomSwitch = Math.floor(Math.random() * (subContainers.length - i)) + i;
		[[subContainers[i]],subContainers[randomSwitch]] = [[subContainers[randomSwitch]],subContainers[i]];
	}
	// Reposition dots
	for (j = 0; j < subContainers.length; j++) {
		subContainers[j].style.paddingLeft = countPadding(colors, j);
	}
}

// Count left padding for subcontainers
function countPadding(array, positionInArray) {
	var step = 100 / array.length;
	return positionInArray * step + (step / 2) + "%";
}