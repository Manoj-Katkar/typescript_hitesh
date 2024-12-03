// Concepts Covered 
// 1) readonly (keyword)
// 2) ? (literal question mark)
// 3) useCase scenario of above concepts 


//! 1) readonly (keyword)

// when to use it 
//     when we want that particular property that is comming from the backend in any object using that only tables 
// of the databases are designed then that id or unique property should not get changed for such cases we will make that property as the read only 


type User = {
    readonly _id: string,               //!this will be only readable cannot update this value because of the readonly 
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number          //!now this became optional means it is not compulsory that each User should have the credit card details 
}


// now creating the user with the variable not with the function 

const myUser: User = {
    _id: "123",
    name: "abc",
    email: "abc@gmail.com",
    isActive: true
}

// Now see I can change the all the values of the properties of the object myUser but cannot change the id

myUser.name = "manoj"; //^this I can able to change 

myUser.isActive = false;  //^this I can able to change 


// !but this I cannot able to change because it is readonly 

//myUser._id = "456";   //error : Cannot assign to '_id' because it is a read-only property





//^ Now lets see the how readonly works on the array in typescript 
// !For Array 

type Car = {
    readonly _id: Array<string>; // each element represent =  string (that I have to mension)
    name: string,
    companyName: string,
    isRunning: boolean
}


const Audi: Car = {
    _id: ["1542"],
    name: "Q-7",
    companyName: "Audi",
    isRunning: true
}

//! Note : for the readonly if there is array then we can add the values in 
//! it but we cannot re-assign the new Array to it means readyonly for array 
//! gives the functionality to add the array elements to it but re-assigning the array elements is not allowed 


console.log("before adding the elements : ", Audi._id);


Audi._id.push("45");
Audi._id.push("78");

console.log("Audi._id array after ading elements : ", Audi._id);


//Audi._id = [];    //!this is re-assigning the entire new Array is not allowed 




//! 3) useCase scenario of above concepts 


// lets applying the type checking for the payments data of the user 

type cardNumber = {
    cardNumber: string
}


type cardDate = {
    cardDate: string
}

type cardCvv = {
    cardCvv: string
}
// !(&) this will merge the all the object types into the one object type 

type cardDetails = cardNumber & cardDate & cardCvv;   //this (&) will merge the all the details 

let hdfcCard: cardDetails = {
    cardNumber: "456",
    cardDate: "01/12/2024",
    cardCvv: "08759"
}


console.log("hdfc card details : ", hdfcCard);









export { }