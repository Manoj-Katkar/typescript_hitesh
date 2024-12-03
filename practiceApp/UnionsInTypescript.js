"use strict";
// Unions gives the functionality to add the more than one type to the variable or the function return type 
Object.defineProperty(exports, "__esModule", { value: true });
var indiaScore = 500; //means I can assign the any of the three data types values to this variable 
indiaScore = "450";
indiaScore = true;
// ^Now I wanted to make the user as the myself who will be also the user and also be the admin when it is neccessary 
var Manoj = {
    name: "manoj",
    id: 98,
};
// ^Now also want to make him as the admin 
Manoj = {
    userName: "Admin-Manoj",
    id: 75
};
// Unions with the functions 
var getDbId = function (id) {
    if (typeof (id) === "string") {
        console.log("id is in string format");
    }
    else if (typeof (id) === "number") {
        console.log("id is in number format");
    }
};
getDbId("45");
getDbId(154);
