"use strict";
// Learning how to handle the types in the functions for the parameters and also assigning the type for each function return value
// num:number = this is the type checking for the parameter that below function is reciving
// (num:number):number =  and this second type cheking re-present the return type for named function
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(num) {
  return num + 10;
}
var ans = addTwoNumbers(50);
console.log(ans);
// now writing the one arrow function that will conver the userName to uppercase
var getUpper = function (userName) {
  return userName.toLocaleUpperCase();
};
var lowerCaseUserName = getUpper("manoj");
//How to pass the default parameter valeu in the typescript functions
var signUpUser = function (userName, userEmail, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
  if (userEmail === "abc@gmail.com") {
    return true; // allow the user to login
  } else {
    return false;
  }
};
var statusOfUser = signUpUser("Manoj", "abc@gmail.com"); //!see here I have not passed the isPaid value still it is by-default taking because in the function defination only I have mensioned That
console.log(statusOfUser);
// Example :
// if a any function is returning the more than one value of the differant type then ,
// how to apply the type checking for that diffearbt type of values that function is returning in typescript
var getValue = function (name) {
  if (name === "Manoj") {
    return "".concat(name, " is learning Typescript");
  }
  return 100;
};
var ans2 = getValue("Manoj");
