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

// https://hype.codes/how-get-current-date-javascript
// This is for the Bonus
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 
if(mm<10) {
    mm = '0'+mm
}
today = dd + '/' + mm + '/' + yyyy;

function excercise3(){
    let yourYear = prompt("Ве молам го вашиот ден, месец и година на раѓање:", "dd/mm/yyyy");
    let userYear = yourYear - today.toString;
    document.getElementById("excercise-3").innerHTML = "Вашата возрасе е " + userYear + "!";
}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById("excercise-3").innerHTML = "Вашата возрасе е " + calculate_age(new Date(1982, 11, 4)) + "!";
// Сеуште не е решена!