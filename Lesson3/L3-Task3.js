"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
console.log("До скидки");
products.forEach(element => console.log(element.price));
console.log("Со скидкой");
products.forEach(element => {element.price*=0.85;  console.log(element.price);});
