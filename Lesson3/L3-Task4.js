"use strict";

function compararray(a, b){
if(a.price<b.price){
return -1;
}
else if(a.price>b.price){
    return 1;
}
return 0;   
}
const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let filtredProds=product.filter(element => (element.hasOwnProperty('photos') && element.photos.length>0));

console.log(filtredProds);
let sortProds=product.sort(function(a, b){if(a.price<b.price){
    return -1;
    }
    else if(a.price>b.price){
        return 1;
    }
    return 0;   
    });

console.log(sortProds);