"use strict";

//1.1__В стиле es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.showNamePrice = function () {
    console.log("Название продукта - " + this.name);
    console.log("Цена - " + this.price);
}
Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

let obj1 = new Product("Book", 1000);
obj1.showNamePrice();
obj1.make25PercentDiscount();
obj1.showNamePrice();

//1.2__В стиле es6
class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
    showNamePrice() {
        console.log("Название продукта - " + this.name);
        console.log("Цена - " + this.price);
    }
}

let obj2 = new ProductClass("Phone", 10000);
obj2.showNamePrice();
obj2.make25PercentDiscount();
obj2.showNamePrice();