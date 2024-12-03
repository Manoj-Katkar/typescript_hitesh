"use strict";
// lets Now I am creating the simple user 
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Manoj",
    email: "manoj@abc.com",
    isActive: false
};
// creating the one method to create the object which will have the All the properties of the User Object 
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
//! directlly adding the un-known key will throw the error 
// createUser({ name: "Manoj", isPaid: true, email: "abc@gmail.com" });  //!now here if I will pass the key which is not defined in the function parameter then it will throw the error 
// but if we create the another object then give that in the createUser method it will not throw the error 
var newUser = {
    name: "Manoj",
    isPaid: true,
    email: "abc@gmail.com" //^this is not mensioned on the function deination still it is getting allowed to add using the same method that is createUser
};
createUser(newUser); //!now this will not throw the error this is the odd behaviour of the objects in typescript 
// now the example of the function which is returning the object itself 
// in the below function it is taking the prameter in the object format and and also returing the object only that I have explicitlly mensioned it 
// should return the object with the following keys with corresponding value 
// { courseNameFinal: string, courseFeesFinal: number }
var createCourse = function (_a) {
    var string = _a.courseName, number = _a.courseFees;
    return { courseNameFinal: string, courseFeesFinal: number };
};
createCourse({ courseName: "react-native", courseFees: 1000 }); //calling the function
var createNewUser2 = function (user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
};
var newllyCreatedUser2 = createNewUser2({ name: "Manoj", email: "abc@gmail.com", isActive: false });
console.log(newllyCreatedUser2);
