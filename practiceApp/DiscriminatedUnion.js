// ^lets create the few interfaces to understand how it works
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
// & in the below way we will use this discriminated unions concept using the one unique propety that we have given as the name as kind
function getTrueShape(shape) {
  if (shape.kind === "circle") {
    // then return the its area of the circle
    return Math.PI * (shape.radius * shape.radius);
  } else if (shape.kind === "square") {
    // area of the square
    return shape.side * shape.side;
  } else if (shape.kind === "rectangle") {
    return shape.length * shape.breadth;
  }
}
// ^ lets implement the same functionality that I have implemented using the if and else if now implementing it using the switch case
// with arrow function
var getArea = function (shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * (shape.radius * shape.radius);
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.breadth;
    default:
      var _exhaustiveCheck = shape; //!technically this should be never be used
      return _exhaustiveCheck;
  }
};
// Function to process payments
var processPayment = function (gateway) {
  switch (gateway.kind) {
    case "paypal":
      return "Processing PayPal payment for email: ".concat(gateway.email);
    case "stripe":
      return "Processing Stripe payment for card token: ".concat(
        gateway.cardToken
      );
    case "razorpay":
      return "Processing Razorpay payment for order ID: ".concat(
        gateway.orderId
      );
    default:
      var _exhaustiveCheck = gateway; // Ensures no unhandled gateway types
      throw new Error("Unhandled payment gateway: ".concat(_exhaustiveCheck));
  }
};
// Create a readline interface inbuild libraray to take the user input in the node js
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Utility function to get user input with a promise
var askQuestion = function (question) {
  return new Promise(function (resolve) {
    rl.question(question, function (answer) {
      return resolve(answer);
    });
  });
};
// Function to get user input dynamically
var getUserInput = function () {
  return __awaiter(_this, void 0, void 0, function () {
    var gatewayChoice, _a, email, cardToken, orderId;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          return [
            4 /*yield*/,
            askQuestion("Choose a payment gateway (paypal/stripe/razorpay): "),
          ];
        case 1:
          gatewayChoice = _b.sent();
          _a = gatewayChoice.toLowerCase();
          switch (_a) {
            case "paypal":
              return [3 /*break*/, 2];
            case "stripe":
              return [3 /*break*/, 4];
            case "razorpay":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          return [4 /*yield*/, askQuestion("Enter your PayPal email: ")];
        case 3:
          email = _b.sent();
          if (!email) throw new Error("PayPal email is required.");
          return [2 /*return*/, { kind: "paypal", email: email }];
        case 4:
          return [4 /*yield*/, askQuestion("Enter your Stripe card token: ")];
        case 5:
          cardToken = _b.sent();
          if (!cardToken) throw new Error("Stripe card token is required.");
          return [2 /*return*/, { kind: "stripe", cardToken: cardToken }];
        case 6:
          return [4 /*yield*/, askQuestion("Enter your Razorpay order ID: ")];
        case 7:
          orderId = _b.sent();
          if (!orderId) throw new Error("Razorpay order ID is required.");
          return [2 /*return*/, { kind: "razorpay", orderId: orderId }];
        case 8:
          throw new Error("Invalid payment gateway selected.");
      }
    });
  });
};
// Main function to run the program
var main = function () {
  return __awaiter(_this, void 0, void 0, function () {
    var userGateway, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, 3, 4]);
          return [4 /*yield*/, getUserInput()];
        case 1:
          userGateway = _a.sent();
          console.log(processPayment(userGateway)); // Process payment based on user input
          return [3 /*break*/, 4];
        case 2:
          error_1 = _a.sent();
          console.error(error_1.message);
          return [3 /*break*/, 4];
        case 3:
          rl.close(); // Close the readline interface
          return [7 /*endfinally*/];
        case 4:
          return [2 /*return*/];
      }
    });
  });
};
// Run the program
main();
