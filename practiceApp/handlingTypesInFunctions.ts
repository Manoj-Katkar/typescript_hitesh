

// Learning how to handle the types in the functions for the parameters and also assigning the type for each function return value 
// num:number = this is the type checking for the parameter that below function is reciving 
// (num:number):number =  and this second type cheking re-present the return type for named function 


function addTwoNumbers(num: number): number {
    return (num + 10);
}

let ans = addTwoNumbers(50);

console.log(ans);



// now writing the one arrow function that will conver the userName to uppercase 

const getUpper = (userName: string): string => {
    return userName.toLocaleUpperCase();
}

let lowerCaseUserName = getUpper("manoj");




//How to pass the default parameter valeu in the typescript functions

const signUpUser = (userName: string, userEmail: string, isPaid: boolean = false): boolean => {
    if (userEmail === "abc@gmail.com") {
        return true; // allow the user to login 
    }
    else {
        return false;
    }
}


const statusOfUser = signUpUser("Manoj", "abc@gmail.com");  //!see here I have not passed the isPaid value still it is by-default taking because in the function defination only I have mensioned That 

console.log(statusOfUser);





// if a any function is returning the more than one value of the differant type then ,
// how to apply the type checking for that diffearbt type of values that function is returning in typescript 

// Example : 

//I have to handle it with the union type 

const getValue = (name: string): string | number => {
    if (name === "Manoj") {
        return `${name} is learning Typescript`;
    }
    return 100;
}


const ans2 = getValue("Manoj");





// funtion which will be used to handle the errors means console logging the errors 

// 1) first Approach : 
//this below will be used by one developer at a time to debug the application errors 
const consoleError = (errorMessage: string): void => {
    console.log(errorMessage);

}


// 2) second Approach using never (prefer this approach) (because never will make the errors more robust while handling part of it)
// this below funtion will be used to log the errors while working accoross the team of the around 20 to 40 developers 
// Note :  if any function is not returning the value then I have to use the special types of the typescript that is (never)

const handleError = (errorMessage: string): never => {
    throw new Error(errorMessage);                      //in This way I have to log the errors 
}


// for now not to get the error use the below syntax 
export { }
