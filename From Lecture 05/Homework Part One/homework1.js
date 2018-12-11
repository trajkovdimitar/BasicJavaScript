// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

//changing the text on all paragraphs and headers with java script


// Changing the text on the headers:

// h1

document.getElementById("myTitle").innerHTML="This h1 is changed :)";
document.getElementsByTagName("H1")[1].innerHTML="This h1 is changed in another way hehe :)";


// There is only one h3 element so it is easy
    
document.getElementsByTagName("H3")[0].innerHTML="This is the new h3 element :)";

// now for the paragraphs

document.querySelector('.paragraph').innerHTML="This paragraph is changed :)";
document.getElementsByTagName("P")[1].innerHTML="This paragraph is changed here aswell!";
