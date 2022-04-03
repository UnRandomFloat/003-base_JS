;"use strict";

function mathOperation(arg1, arg2, operation){
    
    switch(operation)
    {
    case "сумма":
        return sumNums(arg1, arg2);
    case "разность":
        return subNums(arg1, arg2);
    case "произведение":
        return mulNums(arg1, arg2);
    case "деление":
        return divNums(arg1, arg2);
    }
} 
console.log(mathOperation(5,6,"сумма"));
console.log(mathOperation(5,4,"разность"));
console.log(mathOperation(5,10,"произведение"));
console.log(mathOperation(5,1,"деление"));