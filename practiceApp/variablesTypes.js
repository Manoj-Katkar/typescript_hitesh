"use strict";
// strings in typescript
Object.defineProperty(exports, "__esModule", { value: true });
var grettings = "Hello Lets Learn TypeScript";
grettings.toLocaleLowerCase();
console.log(grettings);
// now lets see if I will try to change the data rather than the string then it will throw me the error 
// grettings = 500;  //here it is throwing the error 
// numbers in typescript 
// let userId: number = 12548;
// console.log(userId);
// boolean
var isLoggedIn = false;
// isLoggedIn = "No";           //here it will throw the error 
console.log(isLoggedIn);
// any how works 
var name;
function getName() {
    return "TypeScript";
}
name = getName();
console.log(name);
