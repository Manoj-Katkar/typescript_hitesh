// strings in typescript

let grettings: string = "Hello Lets Learn TypeScript";

grettings.toLocaleLowerCase();


console.log(grettings);


// now lets see if I will try to change the data rather than the string then it will throw me the error 

// grettings = 500;  //here it is throwing the error 





// numbers in typescript 

// let userId: number = 12548;

// console.log(userId);





// boolean
let isLoggedIn: boolean = false;

// isLoggedIn = "No";           //here it will throw the error 

console.log(isLoggedIn);




// any how works 

let name;    //because of the type inference it will have the type as the any because I have not specified the which type of the data that variable should hold 


function getName() {
    return "TypeScript";
}

name = getName();

console.log(name);




// for now not to get the error use the below syntax 
export { }


