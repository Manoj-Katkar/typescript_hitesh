//! understanding the private and the public and protected how it works in the typescript
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
/**
*!Note :
    1) public :
                if you make any property as the public then it can be accessible within that class and also outside the class

     
    2)  private :
                if we make any property as the private then it can be accessible within the that class only but if you try to
                acess it or change that property value then you have to use the getters and setters for that


    3) protected :
                if we make any property as the protected then that property will be accesed within the that class and also in the class where that new Class is extending the class which has the one property as the protected , but note outside the class that property anywhere will be not accessible
 */
// *** Public Example ***
// Public properties can be accessed from within the class and outside the class.
var PublicExample = /** @class */ (function () {
  function PublicExample(name) {
    this.name = name;
  }
  PublicExample.prototype.display = function () {
    return "Hello, ".concat(this.name);
  };
  return PublicExample;
})();
var publicObj = new PublicExample("John");
console.log(publicObj.name); // Accessing public property directly
console.log(publicObj.display()); // Accessing public method
// *** Private Example ***
// Private properties can only be accessed within the class. To access or modify them, you need getters and setters.
var PrivateExample = /** @class */ (function () {
  function PrivateExample(age) {
    this._age = age;
  }
  Object.defineProperty(PrivateExample.prototype, "getAge", {
    // Getter for the private property
    get: function () {
      return this._age;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(PrivateExample.prototype, "setAge", {
    // Setter for the private property
    set: function (newAge) {
      if (newAge > 0) {
        this._age = newAge;
      } else {
        console.log("Age must be a positive number");
      }
    },
    enumerable: false,
    configurable: true,
  });
  return PrivateExample;
})();
var privateObj = new PrivateExample(25);
console.log(privateObj.getAge); // Accessing private property via getter
privateObj.setAge = 30; // Modifying private property via setter
console.log(privateObj.getAge); // Accessing modified value
privateObj.setAge = -5; // Trying to set an invalid value
// *** Protected Example ***
// Protected properties can be accessed within the class and in derived (child) classes.
var ProtectedExample = /** @class */ (function () {
  function ProtectedExample(secret) {
    this.secret = secret;
  }
  ProtectedExample.prototype.revealSecret = function () {
    return "The secret is: ".concat(this.secret);
  };
  return ProtectedExample;
})();
var DerivedProtectedExample = /** @class */ (function (_super) {
  __extends(DerivedProtectedExample, _super);
  function DerivedProtectedExample() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DerivedProtectedExample.prototype.showSecret = function () {
    // Accessing protected property and method in a derived class
    return this.revealSecret();
  };
  return DerivedProtectedExample;
})(ProtectedExample);
var protectedObj = new DerivedProtectedExample("My Secret");
console.log(protectedObj.showSecret()); // Accessing protected property via child class method
// protectedObj.secret; // Error: Property 'secret' is protected and only accessible within class or derived class
