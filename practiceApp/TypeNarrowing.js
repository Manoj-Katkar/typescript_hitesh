"use strict";
// ! What is Type Narrowing in TypeScript?
// *Type narrowing is the process of refining a variable's type
// *to a more specific type based on conditions in your code.
// *It ensures safer and more precise operations.
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
// Lets learn through the proper implementation
// & I will be taking the one function within which I will do the type checking using the typeof
var detectTypeChecking = function (val) {
  // using the typeOf I will be checking
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  // now again I will do the type checking for the number also
  if (typeof val === "number") {
    return val.toFixed(2); //means return  the only two digits after the decimal
  }
};
// !Another example using the function that will provide us the id
var provideId = function (id) {
  // * so I have to handle the case that if from the backend suppose id I didi not get it for any user or for any particular product
  //  I will convert the fasly value thatis null to the truthy so I can understand that id value is null
  if (!id) {
    console.log("Please provide the id");
    // and then simply goback
    return "";
  }
  // is the id is not null then the below code will get executed
  // then return the id into the lowercase
  return id.toLowerCase();
};
// !Note : I should Avoid cheking the types like below function (NEVER DO THIS IT WILL THROW THE TYPE-ERROR)
function printAll1(strs) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var s = strs_1[_i];
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
// !Rather I have to use the below Approach
function printAll2(strs) {
  if (strs === null) {
    return; // Explicitly handle the null case (What I want to return according to condition)
  }
  if (Array.isArray(strs)) {
    // strs is string[] here
    for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
      var s = strs_2[_i];
      console.log(s);
    }
  } else {
    // strs is string here
    console.log(strs);
  }
}
// !subtopics of the type-narrowing
//* ========================================== Instanceof and Type Predicates =============================
// 🌟 Type Narrowing with `instanceof` and Type Predicates in TypeScript
// *📌 1. When to Use `instanceof`
// -----------------------------------
// 1.1 Use `instanceof` when:
//     - You're working with **classes** or **objects created from constructors**.
//     - You want to check if an object is an instance of a particular class.
//
// 1.2 Why It’s Important:
//     - `instanceof` works with the prototype chain to verify an object’s class, ensuring proper type narrowing in inheritance hierarchies.
//     - Useful in object-oriented designs where different classes share a common base.
//
// 1.3 Real-World Example:
var Notification = /** @class */ (function () {
  function Notification() {}
  Notification.prototype.send = function () {
    console.log("Sending notification...");
  };
  return Notification;
})();
var EmailNotification = /** @class */ (function (_super) {
  __extends(EmailNotification, _super);
  function EmailNotification() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  EmailNotification.prototype.sendEmail = function () {
    console.log("Sending email...");
  };
  return EmailNotification;
})(Notification);
var SMSNotification = /** @class */ (function (_super) {
  __extends(SMSNotification, _super);
  function SMSNotification() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SMSNotification.prototype.sendSMS = function () {
    console.log("Sending SMS...");
  };
  return SMSNotification;
})(Notification);
// *Function to process notifications based on their type
function processNotification(notification) {
  // 1.3.1 Check if it's an EmailNotification
  if (notification instanceof EmailNotification) {
    notification.sendEmail(); // TypeScript narrows `notification` to EmailNotification
  }
  // 1.3.2 Check if it's an SMSNotification
  else if (notification instanceof SMSNotification) {
    notification.sendSMS(); // TypeScript narrows `notification` to SMSNotification
  }
  // 1.3.3 Fallback for the base class
  else {
    notification.send();
  }
}
// *Example usage:
var email = new EmailNotification();
processNotification(email); // Output: Sending email...
// *Checking the prototype chain (it will return the true because their prototype internally are pointing towards each other parent and at last at the object and object prototype will point towards null)
// Example : email --> EmailNotification.prototype --> Notification.prototype --> Object.prototype --> null
console.log(email instanceof EmailNotification); // true
console.log(email instanceof Notification); // true
console.log(email instanceof Object); // true
// Custom type predicate function
function isFish(pet) {
  // ! here I am telling to the typescript compiler to treat the pet as the fish
  //*this telling the compiler that is I know more about the type of this value than you do, so treat it as this specific type known as Type Assertion
  return pet.swim !== undefined; // Custom logic to check if `pet` is a Fish
}
function handlePet(pet) {
  // 2.3.1 Use the custom type predicate to narrow the type
  if (isFish(pet)) {
    pet.swim(); // TypeScript narrows `pet` to Fish
  } else {
    pet.fly(); // TypeScript narrows `pet` to Bird
  }
}
// Example usage:
var goldfish = {
  swim: function () {
    return console.log("Swimming...");
  },
};
var sparrow = {
  fly: function () {
    return console.log("Flying...");
  },
};
handlePet(goldfish); // Output: Swimming...
handlePet(sparrow); // Output: Flying...
