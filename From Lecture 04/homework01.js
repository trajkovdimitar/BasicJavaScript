// HOMEWORK #1
// Title: Looping structures

// Description: Write a function that will take no parameters and write the following structure to the console:

// 1  2  3  4
// 5  6  7  8
// 9 10 11 12
// 13 14 15 16
// 17 18 19 20


    function matrice(){
        let line = ' ';
        for(let i = 1; i<=20; i++);
        line += i + ' ';
        if(i%4===0){
            line+= '/n';
        }
        console.log(line);
    }
    matrice();
