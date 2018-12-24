// NUMBER CHECKER

// The function should return an object with the stats as properties. The stats required are:
// How many digits the number has (numDigits property)
// Is the number odd or even (isEven property)
// Is the number positive (isPositive property)
let objProperties = new Object();
let number = prompt("Please enter number","222");


function getNumberStats(){
    count_digits(number);
    isEven(number);
    isPositive(number);
    newObject();
}

            //------------------------------
            function count_digits(number) {
            numDigits = 0;
            integers = Math.abs(number);

            while (integers > 0) {
                integers = (integers - integers % 10) / 10;
                numDigits++;
            }
            objProperties.numDigits = numDigits;
            return numDigits;
        }

            // ------------------------------------------
            function isEven(number) {
                if (number % 2 === 0){
                    objProperties.isEven = true;
                    }else{
                objProperties.isEven = false;
                }
            }
            // -----------------------------
            function isPositive(number)
            {
                if(number < 0){
                    objProperties.isPositive = false;
                    return false;}
                else{
                    objProperties.isPositive = true;
                    return true;}
            }
            // --------------------------
        function newObject(){
            console.log(objProperties);
        }

        function newNumber (){
            number = prompt("Enter new number","1234");
        }