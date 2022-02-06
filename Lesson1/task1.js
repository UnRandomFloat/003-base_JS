;"use strict";
/*Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
градусах по Фаренгейту.*/
let isConfirmed=false;
let t_celsius=36.6;
let t_fahrenheit=Fahrenheit(t_celsius);
alert("Температура по Фарингейту равна : "+t_fahrenheit);
while (!isConfirmed)
{
t_celsius=+prompt("Введите температуру в градусах Цельсия")
t_fahrenheit=Fahrenheit(t_celsius);
alert("Температура по Фарингейту равна : "+t_fahrenheit);
isConfirmed=confirm("Перейти ко второму заданию?");
}

function Fahrenheit(celsius){
return ((9*t_celsius/5)+32).toFixed(2);
}