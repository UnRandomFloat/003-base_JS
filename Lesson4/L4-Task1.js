"use strict";
function PlaceNumb(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999) {
        alert("Введенное числодожно быть целым в диапозоне от 0 до 999 включительно");
        return {};
    }
    else {
        return {
            units: number % 10,
            hundreds: Math.floor(number / 100),
            tens: Math.floor((number - Math.floor(number / 100)*100) / 10),
        }
    }
}