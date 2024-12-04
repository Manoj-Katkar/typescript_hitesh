// giving the type checking with the interface 

interface User {
    readonly dbId: number,                          //! this data will be read only you cannot modify this 
    name: string,
    userId: number,
    email: string,
    googleId?: string,                               //!optional that each user can have or it cannot have 
    // &below is the way How I can define the method in the interface 
    startTrail: () => string,    //^ this method should return the string hence it in mensioned in the interface its return type checking 

    // lets say for user I want to give the coupon then using the following way I can add method to it 
    // which will take the one parameter that is couponName 

    getCoupon: (couponName: string) => number
}


//!==================================== re-opening of the interface =================================================

// !re-opening of the interface : means adding the more properties and methods to it after its declaration that it 

interface User {
    userLocation: string
}



// now lets create the Newuser of the type User 

const newUser: User = {
    dbId: 10,
    name: "Manoj",
    userId: 1245,
    email: "abc@gmail.com",
    userLocation: "mumbai",
    startTrail: () => {
        return "trail is started";
    },
    getCoupon: (couponName: string) => {
        // Any string is accepted for `couponName`
        console.log(`Coupon applied: ${couponName}`);
        // now I want to give the 50 % off 
        return 50;
    },
    userName: "",
}

// newUser.dbId = 45;   //^throw the error 


// Example usage
console.log(newUser.getCoupon("React-Native-Course")); // Works with any string
console.log(newUser.getCoupon("JavaScript-Course"));    // Works with any string


console.log(newUser);




//! ======================================= interface provides the inheritance ==================================
// I want the Admin should have its own properties and also it should have prperties of the user also so I will inherit the all the properties of the User using extends 

interface Admin extends User {  //^here I am inheriting the all user properties of User to Admin 
    adminId: string,

}

// ^ lets assume there is the admin with the name manoj 

const newAdmin: Admin
    = {
    adminId: "7854",
    dbId: 12,
    name: "Rohit",
    userId: 45,
    email: "abd@gmail.com",
    userLocation: "chennai",
    startTrail: () => {
        return "trail is started";
    },
    getCoupon: (couponName: string) => {
        // Any string is accepted for `couponName`
        console.log(`Coupon applied: ${couponName}`);
        // now I want to give the 50 % off 
        return 80;
    },

}


console.log("newAdmin", newAdmin);

newAdmin.getCoupon("node-js");

