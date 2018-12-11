// STUDENT EXERCISE - #2
// WEIGHT CALCULATOR IN CHICKENS
// Want to know how you wiegh in chikens? No problem!
// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

function weightInChickens()
{
    let a = prompt("Please enter your weigh..", "You weigh like a ton..");
    if(a != null){
        let b = 0.5;
        c = a * 0.5;
        alert(`Your bird weigh is  ${c} chickens. `);
    }
}
 weightInChickens();