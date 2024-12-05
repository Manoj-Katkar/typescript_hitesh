"use strict";
//*==================================== Generic Classes in Typescript ===================================
Object.defineProperty(exports, "__esModule", { value: true });
//first understand the how extends works in generics by taking the exmple of the function 
function newFunction(value1, value2) {
    return {
        value1: value1,
        value2: value2
    };
}
// calling the above function 
// newFunction(75, "85");  //!this will throw the error because I am extending the number type which not satify the rule of the generics 
var newObject = newFunction(75, 99);
console.log("newObject : ", newObject);
function myFunction(value1, value2) {
    return {
        value1: value1,
        value2: value2
    };
}
myFunction(45, { connection: "connected", userName: "user1", password: "78541" });
// ! Example of the generic class 
// ! now creating the class where I am taking the T as the generic 
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = []; // Instance property of type T[]
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    Object.defineProperty(Sellable.prototype, "cartArray", {
        // Instance getter for accessing the cart
        get: function () {
            return this.cart;
        },
        enumerable: false,
        configurable: true
    });
    return Sellable;
}());
// Example Usage
var sellableInstance = new Sellable();
sellableInstance.addToCart("Product 1");
sellableInstance.addToCart("Product 2");
console.log("cart array: ", sellableInstance.cartArray); // Output: ["Product 1", "Product 2"]
