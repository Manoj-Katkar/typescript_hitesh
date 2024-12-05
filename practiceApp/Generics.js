//! Learning the how generics helps to do the type checking means how it blocks the type once it receive
//^Why to use the generics in the typescript :
/**
    1) Generics in TypeScript are used to create //**reusable, flexible, and type-safe components**, functions,
    and classes. They allow developers to define a component or function
    that can work with multiple types while still enforcing type safety.

    2) if we use the generics while creating the componenets or the functions or classes then the it becomes more type safe means the
        whatever the user will pass the data that type of data will get locked and that type of the data will only get returned

    3) When you use generics, the type of data passed to a function, class, or component gets "locked in" based on the type provided by the user.


    4) This ensures that the same type is used consistently throughout the function or class, preventing type mismatches.



*/
// ^lets build some re-usable componenets with the generics
// *Scenario 1 
// first lets see the normal way how we were giving the type checking for the functions using the types like number or string or any 
// &below function is like explicit we have difine the type it should take the argument in the number and also return the number data-type 
function identify1(argument) {
    return argument;
}
// *Scenario 2 
// suppose I want that function should take the what the user will send the data of whichever type and it should lock that data-type and same type of data should get returned
// & then I have to go with the generics               
// !Syntax of the using the generics              
function identify2(argument) {
    return argument;
}
// now lets see how to create the array  of the particular type  
var score = [];
var names = [];
// ^now lets create the few more functions to understand the generics in detail how it works and all
//!normal way 
function identityOne(val) {
    return val;
}
// !using any (That I should not prefer)
function identityTwo(val) {
    return val;
}
// !now using the generics by the types that will come from theuser that type it will take that will get locked and the same type of the data will get returned over here 
//* it works like any but not exactlly like any means it will take the any type of the data but once one typeof the data is taken then it will lock that type and it will return the same type of data 
function identityThree(val) {
    return val;
}
var data = identityThree(85); //now it will take the number as the type and it will block that type and return the same type 
console.log("data : ", data);
console.log(typeof data); //here it will return the same type only 
// Generic function using the `Bootle` interface
function identityFour(item) {
    console.log("Brand: ".concat(item.brand, ", Type: ").concat(item.type));
    return item;
}
// Usage
var myBootle = { brand: "Coca-Cola", type: 1 };
identityFour(myBootle); // Logs: Brand: Coca-Cola, Type: 1
