// STUDENT EXERCISE - #1
// MANIPULATE THE DOM
// Select the first div
// Select all paragraphs
// Select the last div
// Select the header 3 in the last div
// Select the header 1 in the last div
// Get the text from the first paragraph in the second div
// Add the word "text" to the text element in the second div
// Change the text of the header 1 in the last div
// Change the text of the header 3 in the last div
// Note:You can't change the HTML
let firstDiv = document.querySelector("div");
let allParagraphs = document.getElementsByTagName("p");
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;
let header3last = lastDiv.getElementsByTagName("h3")[0];
let header1last = header3last.previousElementSibling;
let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;;
document.querySelector("text").innerText += " text!";
header3last.innerText = "Text added from JS";
header1last.innerText = "Text added from JS also";
