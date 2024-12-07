

// ! What is Type Narrowing in TypeScript?
// *Type narrowing is the process of refining a variable's type
// *to a more specific type based on conditions in your code.
// *It ensures safer and more precise operations.


// Lets learn through the proper implementation 

// & I will be taking the one function within which I will do the type checking using the typeof 

const detectTypeChecking = (val: number | string) => {
    // using the typeOf I will be checking 

    if (typeof (val) === "string") {
        return val.toLocaleLowerCase();
    }

    // now again I will do the type checking for the number also 
    if (typeof (val) === "number") {
        return val.toFixed(2);         //means return  the only two digits after the decimal 
    }
}



// !Another example using the function that will provide us the id 

const provideId = (id: string | null): string => {

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

}



// !Note : I should Avoid cheking the types like below function (NEVER DO THIS IT WILL THROW THE TYPE-ERROR)



function printAll1(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}




// !Rather I have to use the below Approach 

function printAll2(strs: string | string[] | null) {
    if (strs === null) {
        return; // Explicitly handle the null case (What I want to return according to condition)
    }

    if (Array.isArray(strs)) {
        // strs is string[] here
        for (const s of strs) {
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
class Notification {
    send() {
        console.log("Sending notification...");
    }
}

class EmailNotification extends Notification {
    sendEmail() {
        console.log("Sending email...");
    }
}

class SMSNotification extends Notification {
    sendSMS() {
        console.log("Sending SMS...");
    }
}

// *Function to process notifications based on their type
function processNotification(notification: Notification) {
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
const email = new EmailNotification();
processNotification(email); // Output: Sending email...

// *Checking the prototype chain (it will return the true because their prototype internally are pointing towards each other parent and at last at the object and object prototype will point towards null)
// Example : email --> EmailNotification.prototype --> Notification.prototype --> Object.prototype --> null

console.log(email instanceof EmailNotification); // true
console.log(email instanceof Notification);      // true
console.log(email instanceof Object);            // true

// -----------------------------------

// 📌 2. When to Use Type Predicates
// -----------------------------------
// 2.1 Use Type Predicates when:
//     - You’re working with **custom types or interfaces**, not classes.
//     - You need a flexible way to determine a type, especially when there's no prototype to rely on (e.g., for structural typing).
//
// 2.2 Why It’s Important:
//     - TypeScript can’t infer specific types from conditions unless you explicitly define how to check.
//     - Type predicates (`param is Type`) allow custom logic to determine a type, making type checks reusable and expressive.
//
// 2.3 Real-World Example:
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

// Custom type predicate function
function isFish(pet: Fish | Bird): pet is Fish {
    // ! here I am telling to the typescript compiler to treat the pet as the fish 
    //*this telling the compiler that is I know more about the type of this value than you do, so treat it as this specific type known as Type Assertion

    return (pet as Fish).swim !== undefined; // Custom logic to check if `pet` is a Fish
}

function handlePet(pet: Fish | Bird) {
    // 2.3.1 Use the custom type predicate to narrow the type
    if (isFish(pet)) {
        pet.swim(); // TypeScript narrows `pet` to Fish
    } else {
        pet.fly(); // TypeScript narrows `pet` to Bird
    }
}

// Example usage:
const goldfish: Fish = { swim: () => console.log("Swimming...") };
const sparrow: Bird = { fly: () => console.log("Flying...") };

handlePet(goldfish); // Output: Swimming...
handlePet(sparrow);  // Output: Flying...

// -----------------------------------

// 📌 3. Comparison Between `instanceof` and Type Predicates
// -----------------------------------
// 3.1 `instanceof`:
// !    - Use With: Classes and objects with prototypes.
//     - Checks: Prototype chain.
//     - Use Case: Object-oriented designs.
//     - Syntax: `obj instanceof ClassName`
//
// 3.2 Type Predicates:
// !    - Use With: Interfaces and custom objects.
//     - Checks: Structural type properties.
//     - Use Case: Flexible, functional designs.
//     - Syntax: `function obj is Type`
//
// -----------------------------------

// 📌 4. Why Type Narrowing Matters
// -----------------------------------
// 4.1 Ensures safer code:
//     - Reduces runtime errors by verifying types at compile-time.
//
// 4.2 Improves readability:
//     - Makes the intent clear in how different types are handled.
//
// 4.3 Efficient execution:
//     - Avoids unnecessary type checks and allows IDEs to provide better autocomplete and linting.
//
// -----------------------------------



export { }