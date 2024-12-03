// Unions gives the functionality to add the more than one type to the variable or the function return type 

let indiaScore: (number | string | boolean) = 500;   //means I can assign the any of the three data types values to this variable 


indiaScore = "450";

indiaScore = true;



// ^ Scenario suppose we will have the one user in the company that is User also and it beomes Admin Also 

type User = {
    name: string,
    id: number
}



type Admin = {
    userName: string,
    id: number
}


// ^Now I wanted to make the user as the myself who will be also the user and also be the admin when it is neccessary 


let Manoj: User | Admin = {
    name: "manoj",
    id: 98,
}

// ^Now also want to make him as the admin 

Manoj = {
    userName: "Admin-Manoj",
    id: 75
}






// Unions with the functions 

const getDbId = (id: string | number): void => {
    if (typeof (id) === "string") {
        console.log("id is in string format");

    }
    else if (typeof (id) === "number") {
        console.log("id is in number format");

    }
}

getDbId("45");
getDbId(154);








//^ ========================= How to declare the Arrays in typescript with the type specific ====================

const ArrayInNumber: number[] = [10, 20, 40, 158];   //only numbers data type is allowed 

const ArrayInString: string[] = ["45", "25", "63", "41"];  //only string data type is allowed 

// ! now array with the mix type of the data in the typescript 

const mixedtypeArray: (number | string)[] = ["Hello", 20, "element", "98"];  //!in this way I can create the mix data type array in the typescript 



export { }