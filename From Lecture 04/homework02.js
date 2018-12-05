// HOMEWORK #2
// Title: Looping structures

// Description: Write a function that will take no parameters and write the following structure to the console:

// 						 Monday: Working
// 						 Tuesday: Working
// 						 Wednesday: Working
// 						 Thursday: Working
// 						 Friday: Working
// 						 Saturday: Weekend
// 						 Sunday: Weekend
					
// Try to use arrays and looping

let days = ['Monday: Working', 'Tuesday: Working', 'Wednesday: Working', 'Thursday: Working', 'Friday: Working', 'Saturday: Weekend', 'Sunday: Weekend'];
let counter = 0; 
while (counter < days.length) {  
	document.write(days[counter] + ', ' + '<br>');  
	counter++; 
}

