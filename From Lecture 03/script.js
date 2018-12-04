// Вежба 1
// Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
// Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);


function celsiusFahrenheit(){
    let celsius = prompt("Enter celsius:");
    let celsiusConverter = celsius * 1.8 + 32;
    document.getElementById("excercise-1").innerHTML = `${celsius} celsius converted to fahrenheit is ${celsiusConverter}.`
}

function Fahrenheitcelsius(){
    let Fahrenheit = prompt("Enter fahrenheit:");
    let fahrenheitConverter = (Fahrenheit-32) * 5/9;
    document.getElementById("excercise-1").innerHTML = `${Fahrenheit} fahrenheit converted to celsius is ${fahrenheitConverter}.`
}

// Вежба 2
// STUDENT EXERCISE - #2
// Decription: Going Meta
// Action: Write a function that will be able to calculate the expression a*b+c
// Rewrite the Celsius to fahrenheit function to use this function
// Have the parameters use default values

function goingMeta (){
    let a = prompt("Enter value for a:");
    let b = prompt("Enter value for b:","1.8");
    let c = prompt("Enter value for c:","32");
    let convert =  a * b + c;
    document.getElementById("excercise-2").innerHTML = `The value ${convert}`;
}

// Вежба 3 
// STUDENT EXERCISE - #3
// Decription: Counting function
// Action: Write a function that will be able to determine how many times it was called
// Time to accomplish: 10 minutes.

function countingFunction(){
    console.log("This function was called");
}

// Вежба 4
// HOMEWORK
// RANDOM RANGE GENERATOR
// Write a function that generates a random number
// The function should take as input the range of the number
// Make any necessary validation / default values
// Reuse the already generated convert function to implement.

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));


			function convert(value=getRandomInt(5), factor = Math.random(), offset = 0) 
		{
			// value expected output: 0, 1, 2, 3 or 4

			// factor expected output: a number between 0 and 1	

		  return value * factor + offset;
		 
		}
}