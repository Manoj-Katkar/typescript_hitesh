// ^lets create the few interfaces to understand how it works 

// this can be more used in the payment gateyway 
// below is the implementation of discriminated union according to the docs 
// move down you will get the original usecase scenario (//!Real-World Scenario)


interface Circle {
    kind: "circle",   //^ its not compulsory that it should be name it as the kind we can name it as anything like property finder etc but it will used to uniquely find we are using which interface according to value of the kind so typescript will not get confused 
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    breadth: number
}



// ^ lets create the one new Type 
// ! now here I am later adding the another interface in future so it should show me the errors 

type Shape = Circle | Square | Rectangle;


// & in the below way we will use this discriminated unions concept using the one unique propety that we have given as the name as kind

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        // then return the its area of the circle 
        return (Math.PI * (shape.radius * shape.radius));
    }
    else if (shape.kind === "square") {
        // area of the square 
        return (shape.side * shape.side);
    }
    else if (shape.kind === "rectangle") {
        return (shape.length * shape.breadth);
    }
}




// ^ lets implement the same functionality that I have implemented using the if and else if now implementing it using the switch case 
// with arrow function 
const getArea = (shape: Shape) => {

    switch (shape.kind) {
        case "circle":
            return (Math.PI * (shape.radius * shape.radius));

        case "square":
            return (shape.side * shape.side);

        case "rectangle":
            return (shape.length * shape.breadth);

        default:
            const _exhaustiveCheck: never = shape;    //!technically this should be never be used 
            return _exhaustiveCheck;
    }

}








// ! ==========================  Real-World Scenario: Payment Gateway Integration =================

// When and why to use it 

/**
    When: 
        The discriminated union concept in TypeScript is particularly useful when dealing with scenarios 
        where multiple related entities share common properties but have distinct behaviors. A great 
        real-world example of this is integrating multiple payment gateways into an application.

    Why :
        1) Type Safety: Ensures at compile time that all possible cases are handled when working with different payment gateways.
        2) Scalability: Adding new payment gateways becomes manageable, as TypeScript will warn you if the new gateway's behavior 
        is not defined.
        3) Clarity: Code becomes more structured and easier to maintain with discriminated unions.

 */

/**
**Implementation using the multiple payment gateways : 

        Scenario: Payment Gateway Integration
        Consider a system that supports multiple payment gateways like PayPal, Stripe, and Razorpay. Each gateway has unique properties and behaviors, such as specific parameters required for processing payments.


*/


// Define interfaces for each payment gateway
interface PayPal {
    kind: "paypal"; // Unique discriminator
    email: string;  // PayPal-specific property
}

interface Stripe {
    kind: "stripe"; // Unique discriminator
    cardToken: string; // Stripe-specific property
}

interface Razorpay {
    kind: "razorpay"; // Unique discriminator
    orderId: string; // Razorpay-specific property
}

// Union type for all payment gateways
type PaymentGateway = PayPal | Stripe | Razorpay;

// Function to process payments
const processPayment = (gateway: PaymentGateway) => {
    switch (gateway.kind) {
        case "paypal":
            return `Processing PayPal payment for email: ${gateway.email}`;
        case "stripe":
            return `Processing Stripe payment for card token: ${gateway.cardToken}`;
        case "razorpay":
            return `Processing Razorpay payment for order ID: ${gateway.orderId}`;
        default:
            const _exhaustiveCheck: never = gateway; // Ensures no unhandled gateway types
            throw new Error(`Unhandled payment gateway: ${_exhaustiveCheck}`);
    }
};





// Create a readline interface inbuild libraray to take the user input in the node js 

const rl = readline.createInterface({  //!here it will show the red line because I am not using this it in the my project it is simple .tsx file 
    input: process.stdin,
    output: process.stdout,
});

// Utility function to get user input with a promise
const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });

};

// Function to get user input dynamically
const getUserInput = async (): Promise<PaymentGateway> => {
    const gatewayChoice = await askQuestion("Choose a payment gateway (paypal/stripe/razorpay): ");

    switch (gatewayChoice.toLowerCase()) {
        case "paypal": {
            const email = await askQuestion("Enter your PayPal email: ");
            if (!email) throw new Error("PayPal email is required.");
            return { kind: "paypal", email };
        }
        case "stripe": {
            const cardToken = await askQuestion("Enter your Stripe card token: ");
            if (!cardToken) throw new Error("Stripe card token is required.");
            return { kind: "stripe", cardToken };
        }
        case "razorpay": {
            const orderId = await askQuestion("Enter your Razorpay order ID: ");
            if (!orderId) throw new Error("Razorpay order ID is required.");
            return { kind: "razorpay", orderId };
        }
        default:
            throw new Error("Invalid payment gateway selected.");
    }
};

// Main function to run the program 
const main = async () => {
    try {
        const userGateway = await getUserInput(); // Dynamically get user input
        console.log(processPayment(userGateway)); // Process payment based on user input
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close(); // Close the readline interface
    }
};

// Run the program
main();