// Alert
alert("Hello from Java Script");

//Numbers are always stored as a floating-point values 
// Stringovite може да бидат затворени со една '' или ""
// ex. let name='Weko'; let name = "Weko"; let name = `Weko`;
// Booleans can either be true or false
//  -----Correct declaration of variables-----
// This below is pro tip!
let number; //Declaration
number = 5; // Initialization

// Variables names are case sensitive, and must begin with letter or underscore!
// Variables declared inside a function are LOCAL
// Variables declared outside a function are GLOBAL
// <-- This is ordinary single line comment!
/* This is MULTILINE COMMENT BECAUSE
CAN TRANSFER BETWEEN ROWS */

// Excercise 01
/** Write a javascript program to convert a length given in feet to meters! **/
// 1 feet = 0.3048m <--

let feet = 5.9; 
let metersPerFeet = 0.3048;
let meters = metersPerFeet * feet;
console.log(`The length of ${feet} feet is equal to ${meters} meters`);

// Excercise 02
// Program that calculates area of Rectangle!

let a=2;
let b=3;
let area = a * b;
console.log(`The are of the rectangle is ${area} centimeters cube.`);

// Excercise 03
// Program that will calculate area of a circle
// TIP: area= pi*r^2

let areaofcircle;
let r=3; // radius
areaofcircle = Math.PI * (r*r);
console.log(`The area of the circle is ${areaofcircle} centimeters cube.`);

// Homework 01
// Calculate the price of 30 Phones where one phone is $119.95 and the tax rate is 5%

let phone;
phone= 119.95;
let taxrate;
taxrate = 0.05;
let wtTaxes;
wtTaxes = 30 * phone;
let wTaxes;
wTaxes = wtTaxes + (wtTaxes * taxrate);

console.log(`The price of the phones without taxes is $${wtTaxes}.`);
console.log(`The price of the phones with taxes is $${wTaxes}.`);

