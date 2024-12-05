

//*==================================== Generic Classes in Typescript ===================================

//first understand the how extends works in generics by taking the exmple of the function 

function newFunction<T, U extends number>(value1: T, value2: U): object {
    return {
        value1,
        value2
    }
}

// calling the above function 
// newFunction(75, "85");  //!this will throw the error because I am extending the number type which not satify the rule of the generics 


let newObject = newFunction(75, 99);

console.log("newObject : ", newObject);



// !Another example using the interface 
// !this will be usefull while designing the complex things 

interface database {
    connection: string,
    userName: string,
    password: string
}



function myFunction<T, U extends database>(value1: T, value2: U): object {
    return {
        value1,
        value2
    }
}


myFunction(45, { connection: "connected", userName: "user1", password: "78541" });









//!now see actual how the generics works on the selling the courses and quizes 

interface Quize {
    name: string,
    type: string
}


interface Course {
    name: string,
    author: string,
    subject: string
}
// ! Example of the generic class 
// ! now creating the class where I am taking the T as the generic 

class Sellable<T> {
    public cart: T[] = []; // Instance property of type T[]

    addToCart(product: T) {
        this.cart.push(product);
    }

    // Instance getter for accessing the cart
    get cartArray() {
        return this.cart;
    }
}

// Example Usage
const sellableInstance = new Sellable<string>();
sellableInstance.addToCart("Product 1");
sellableInstance.addToCart("Product 2");

console.log("cart array: ", sellableInstance.cartArray); // Output: ["Product 1", "Product 2"]




export { }