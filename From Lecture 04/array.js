//CREATING AN ARRAY
let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// ACCESSING ITEMS IN ARRAY
alert(days [1]);
// CHANGING ITEMS VALUES - Get the item at the desired position and assign it a value
days[1] = "Tuesday";
// Change item at last position
days[days.length - 1] = 'Sunday';   //for example, the 0 in days[0]. Because 0 is the first, -1 is the last element!!!
//ADDING ITEMS - Add item as last element of array
days[days.length] = 'No more days in the week'; // it will add it after the last element
days.push('No more days in the week'); // same as the one above, adds after the last element
days.push('No more days in the week', 'Stop adding days, these is no more'); // YOU CAN ADD MULTIPLE ITEMS TOO!
// ADDING ITEMS TO THE BEGINNING OF ARRAY
//command unshift() allows you to add item to the beginning of the array
var properties = ['red', '14px', 'Arial']; // Array named properties
properties.unshift('bold');
//result ['bold', 'red', '14px', 'Arial']
//you can use unshift() to insert multiple items
properties.unshift('bold', 'italic', 'underlined');
//command pop() allows you to remove an item from the end of an array
//pop() returns the removed item

var p = [0,1,2,3]; 
var removedItem = p.pop(); 

//result p = [0,1,2]; removedItem = 3;
//command shift() allows you to remove an item from the beginning of an array
//shift() returns the removed item

var p = [0,1,2,3]; 
var removedItem = p.shift(); 

//result  p = [1,2,3]; removedItem = 0;


// CREATING AN ARRAY (2)
var iAmEmptyArray = []; //an empty array
var iAmMixedArray = [1, 2, 'I am string', false]; //mixed array
var authors = [ 'Ernest Hemingway',                
	'Charlotte Bronte',                
	'Dante Alighieri',  //A single statement 
	'Emily Dickinson'   //although in multiple lines           
];

// While loop with Arrays

var day = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
var counter = 0; 
while (counter < day.length) {  
	document.write(days[counter] + ', ');  
	counter++; 
}