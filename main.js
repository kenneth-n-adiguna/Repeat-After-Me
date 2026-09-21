//////// INITIALIZATION
let acceptedKeys = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const sysPattern = [];
const pPattern = [];

let currentIndex = -1;
let currentKey;
let score = 0;


//////// FUNCTIONS
function generateSysPattern() {
	sysPattern.length = 0;
	for (let i = 0; i < 4; i++) {
		sysPattern.push(
			acceptedKeys[  // Convert that into key names
				Math.floor(Math.random() * 4)  // 0, 1, 2, 3
			]
		);
	}
	
	console.log("Score: " + score);
	console.log("sysPattern: " + sysPattern);
	console.log("");
}

function clearPPattern() {
	currentIndex = -1;  // Set to -1 so that the first accepted key increments it to 0
	pPattern.length = 0;

}

function printProgress() {
	console.log("currentIndex: " + currentIndex);
	console.log("currentKey: " + currentKey);
	console.log("pPattern: " + pPattern);
	console.log("");
}

function rightAnswer() {
	score += 1;
	clearPPattern();
	console.log("\n\n\n----------------------------------------------------------");
	console.log("CORREEEECT!! Now, try another pattern!");
	generateSysPattern();
}

function wrongAnswer() {
	if (score > 0) {
		score -= 1;
	}
	clearPPattern();
	console.log("\n\n\n----------------------------------------------------------");
	console.log("WRONG! Try again!");
	generateSysPattern();
}

////////////////////////// MAIN
generateSysPattern();

// Listen for keys pressed. Update pattern arrays and variables
document.addEventListener("keydown", function (event) {
	
	if (acceptedKeys.includes(event.key)) {  // An accepted key is pressed
		currentIndex += 1;  // Current index of both sysPattern and pPattern
		currentKey = sysPattern[currentIndex];  // Current key of sysPattern

		pPattern.push(event.key);

		printProgress();  // Prints progress
		
		// Right and wrong answer response
		if ((event.key == currentKey) && (pPattern.length == sysPattern.length)) {
			rightAnswer();
		} else if (event.key != currentKey) {
			wrongAnswer();	
		}


	}
});





/*
STORAGE

const input = document.getElementById("input");  // Create a constant and attach it to element named "input"
console.log(event.key)

document.getElementById("demo").innerHTML = "You pressed: " + event.key;  // .innerHTML = deal with HTML markup

pPattern.length = 0;  // Best way to clear arrays. There is only one instance of the array, and it is updated.


// Number of iterations: end - start
/*
Applying Math.floor() to each:

Math.random(): [0, 1)
0

Math.random * 4 : [0, 4)
0, 1, 2, 3

Math.random * 4 + 1 : [1, 5)
1, 2, 3, 4
*/
*/