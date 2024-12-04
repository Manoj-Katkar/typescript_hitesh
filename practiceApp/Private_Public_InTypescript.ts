//! understanding the private and the public and protected how it works in the typescript

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
class PublicExample {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public display(): string {
        return `Hello, ${this.name}`;
    }
}

const publicObj = new PublicExample("John");
console.log(publicObj.name); // Accessing public property directly
console.log(publicObj.display()); // Accessing public method


// *** Private Example ***
// Private properties can only be accessed within the class. To access or modify them, you need getters and setters.
class PrivateExample {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // Getter for the private property
    get getAge(): number {
        return this._age;
    }

    // Setter for the private property
    set setAge(newAge: number) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a positive number");
        }
    }
}

const privateObj = new PrivateExample(25);
console.log(privateObj.getAge); // Accessing private property via getter
privateObj.setAge = 30; // Modifying private property via setter
console.log(privateObj.getAge); // Accessing modified value
privateObj.setAge = -5; // Trying to set an invalid value


// *** Protected Example ***
// Protected properties can be accessed within the class and in derived (child) classes.
class ProtectedExample {
    protected secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    protected revealSecret(): string {
        return `The secret is: ${this.secret}`;
    }
}

class DerivedProtectedExample extends ProtectedExample {
    public showSecret(): string {
        // Accessing protected property and method in a derived class
        return this.revealSecret();
    }
}

const protectedObj = new DerivedProtectedExample("My Secret");
console.log(protectedObj.showSecret()); // Accessing protected property via child class method
// protectedObj.secret; // Error: Property 'secret' is protected and only accessible within class or derived class


export { }
