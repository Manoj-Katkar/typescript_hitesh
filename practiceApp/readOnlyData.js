"use strict";
// Concepts Covered 
// 1) readonly (keyword)
// 2) ? (literal question mark)
// 3) useCase scenario of above concepts 
Object.defineProperty(exports, "__esModule", { value: true });
// now creating the user with the variable not with the function 
var myUser = {
    _id: "123",
    name: "abc",
    email: "abc@gmail.com",
    isActive: true
};
// Now see I can change the all the values of the properties of the object myUser but cannot change the id
myUser.name = "manoj"; //^this I can able to change 
myUser.isActive = false; //^this I can able to change 
var Audi = {
    _id: ["1542"],
    name: "Q-7",
    companyName: "Audi",
    isRunning: true
};
//! Note : for the readonly if there is array then we can add the values in 
//! it but we cannot re-assign the new Array to it means readyonly for array 
//! gives the functionality to add the array elements to it but re-assigning the array elements is not allowed 
console.log("before adding the elements : ", Audi._id);
Audi._id.push("45");
Audi._id.push("78");
console.log("Audi._id array after ading elements : ", Audi._id);
var hdfcCard = {
    cardNumber: "456",
    cardDate: "01/12/2024",
    cardCvv: "08759"
};
console.log("hdfc card details : ", hdfcCard);
