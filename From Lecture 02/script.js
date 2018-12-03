// Excercise 01: Description
// Prompt text to the user,dialog box 
// Ask the user how much money he have, and depending on the value
// suggest him what should he do.

// Example from w3schools for prompt box:
// Display a prompt box which ask the user for her/his name, and output a message:
function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter"); // Harry Potter is the suggestion
    if (person != null) { // null значи дека при ништо внесено нема да се продолжи функцијата
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
// Let us use this for the excercise
function excercise1(){
let ammountEntered = prompt("Ве молиме внесете колку пари имате:","Во денари");// Корисникот прави внес
if (ammountEntered < 100){
    document.getElementById("excercise-1").innerHTML = 
    "Вашите средства од " + ammountEntered + " денари не се доволни!";
} else{
    document.getElementById("excercise-1").innerHTML = 
    "Можете да одите до продавница со вашите " + ammountEntered + " Денари!";
}
}
// <-------------->
// Excercise 02 (HomeWork)
//Decription: Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:
// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig
// Action: Write javascript code that will calculate which Chinese Zodiac a given year is in
// I will use switch statement for every of this 12 signs
function excercise2(){
    let enteredYear = prompt("Ве молиме внесете година:");
    let newvalue = (enteredYear - 4) % 12;
    // the switch statements are inside of a function
    switch(newvalue){
        case 0:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Rat!";
        break;
        case 1:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Ox!";
        break;
        case 2:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Tiger!";
        break;
        case 3:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Rabbit!";
        break;
        case 4:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Dragon!";
        break;
        case 5:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Snake!";
        break;
        case 6:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Horse!";
        break;
        case 7:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Goat!";
        break;
        case 8:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Monkey!";
        break;
        case 9:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Rooster!";
        break;
        case 10:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Dog!";
        break;
        case 11:
        document.getElementById("excercise-2").innerHTML = "Your Chinese Zodiac sign is Pig!";
    }
    
}

// EXERCISE - #3
//THE AGE CALCULATOR
// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
// Bonus bonus: Use a date instead of a year.

function calculateAge (){
let birthYear = prompt ("Please enter your year of birth:");
let currentYear;
currentYear = 2018;
let yourAge;
yourAge = currentYear - birthYear;
document.getElementById("excercise-3").innerHTML = `You are ${yourAge} years old.`;
}

// EXERCISE - #4 (HOMEWORK - OPTIONAL)

// THE FORTUNE TELLER
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (){
    let numberofChildren = prompt("Please enter number of children: ");
    let partnersName = prompt("Please enter your partner`s name: ");
    let geoLocation = prompt("Please enter your dream city: ");
    let jobTitle = prompt ("Please enter the name of your profession: ");
    document.getElementById("excercise-4").innerHTML = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberofChildren} kids.`;
}

// EXERCISE - #5 (HOMEWORK)

// WHICH COMES FIRST
// Write a function named whichComesFirst that:
// takes the names of two books.
// outputs which of the given books should be first if put on a shelf
// Call that function 3 times with 3 different values for the arguments.

function whichComesFirst(){
let firstBook = prompt ("Enter the name of the first book:");
let secondBook = prompt ("Enter the name of the second book");
if(firstBook.length > secondBook.length){
    document.getElementById("excercise-5").innerHTML = `The ${firstBook} should be placed first.`;
}else{
    document.getElementById("excercise-5").innerHTML = `The ${secondBook} should be placed first.`;
}
}

// HOMEWORK

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(){
    let num1 = prompt("Please enter number 1:");
    let num2 = prompt("Please enter number 2:");
    let num3 = prompt("Please enter number 3:");
    let max = Math.max(num1, num2, num3);
    document.getElementById("excercise-6").innerHTML = `The largest of them is ${max}.`
}
