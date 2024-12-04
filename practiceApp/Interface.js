// giving the type checking with the interface 
// now lets create the Newuser of the type User 
var newUser = {
    dbId: 10,
    name: "Manoj",
    userId: 1245,
    userEmail: "abc@gmail.com",
    userLocation: "mumbai",
    startTrail: function () {
        return "trail is started";
    },
    getCoupon: function (couponName) {
        // Any string is accepted for `couponName`
        console.log("Coupon applied: ".concat(couponName));
        // now I want to give the 50 % off 
        return 50;
    }
};
// newUser.dbId = 45;   //^throw the error 
// Example usage
console.log(newUser.getCoupon("React-Native-Course")); // Works with any string
console.log(newUser.getCoupon("JavaScript-Course")); // Works with any string
console.log(newUser);
// ^ lets assume there is the admin with the name manoj 
var newAdmin = {
    adminId: "7854",
    dbId: 12,
    name: "Rohit",
    userId: 45,
    userEmail: "abd@gmail.com",
    userLocation: "chennai",
    startTrail: function () {
        return "trail is started";
    },
    getCoupon: function (couponName) {
        // Any string is accepted for `couponName`
        console.log("Coupon applied: ".concat(couponName));
        // now I want to give the 50 % off 
        return 80;
    }
};
console.log("newAdmin", newAdmin);
newAdmin.getCoupon("node-js");
