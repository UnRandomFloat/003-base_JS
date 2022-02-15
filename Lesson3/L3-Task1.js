;"use strict";

for (let i=0; i<=10; i++){
    console.log(i +isEven(i));
}
function isEven(x){
    if (x===0){
        return "- это ноль";
    }
    else if(x%2===0){
        return "- четное";
    }
    else{
        return "- нечетное";
    }
}

