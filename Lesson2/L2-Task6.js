; "use strict";
let unCorrect=false;
do
{
let sumToPut=prompt("Введите целое число которое положить на счет:");
let lastChar=sumToPut.substring(sumToPut.length-1,sumToPut.length);
let integerSum=Number(sumToPut)
if(!isNaN(integerSum) && integerSum>0 && Math.abs(integerSum)!==Infinity )
{
    switch(lastChar)
    {
    case "1":
        alert(`Ваша сумма ${integerSum} рубль успешно зачислена`)
        unCorrect=false;
        break;
    case "2":
    case "3":
    case "4":
        alert(`Ваша сумма ${integerSum} рубля успешно зачислена`)
        unCorrect=false;
        break;
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
        alert(`Ваша сумма ${integerSum} рублей успешно зачислена`)
        unCorrect=false;
        break;
    }
  
}
else
{
    alert("Введено некорректное число(либо отрицательное либо нулевое либо просто набор букв) или вы нажали кнопку отмена");
    unCorrect=true;
}
}while(unCorrect);
