// Example 1

// Action: Write a JavaScript program to read ten values, determine the largest value, and print it

// Function.prototype.apply() allows you to call a function with a given this value and an array of arguments.

let numbers = [1, 5, 6, 3, 10, 12, 9, 23, 50, 18];
let max = Math.max.apply(null, numbers);
document.write(`The maximum element from the array ${numbers} is ${max}.`);