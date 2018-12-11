// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
function myFunction() {
    for(i=0; i<numbers.length; i++){
        var node = document.createElement("LI","br");
        var textnode = document.createTextNode(numbers[i]);
        node.appendChild(textnode);
        document.getElementsByTagName("BODY")[0].appendChild(node);
    }
}
myFunction();

// Sum of the numbers

    let result = numbers.reduce((a, b) => a + b, 0);
   
    var para = document.createElement("p");
    var node = document.createTextNode(`The result is : ${result}`);
    para.appendChild(node);
    var element = document.getElementsByTagName("BODY")[0];
    element.appendChild(para);
  
 