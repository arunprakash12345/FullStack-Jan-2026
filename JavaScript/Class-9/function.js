// Function Declaration
// Function Statement
// Function Parameters
// Function Arguments
// Function Invocation

// when should we use function
// any repeatable task that we want to perform multiple times in our code,
// we can use a function to encapsulate that task and call it whenever needed.
// Functions help us avoid code duplication, improve readability,
// and make our code more modular and maintainable.

function sayHi(from, to) {
  // function body contains function statements
  console.log(from + " is wishing good morning to " + to);
  //   return null;
}

// Alice , bob are arguments
// sayHi is a function invocation()
// sayHi("Alice", "Bob");

// function expression

// named(sayhi) function expression
const sayHiExpression = function sayHi(from, to) {
  console.log(from + " is wishing good morning to " + to);
};

// unnamed function expression or anonymous function expression
const sayHiExpression2 = function (from, to) {
  console.log(from + " is wishing good morning to " + to);
};

// sayHiExpression("Charlie", "Dave");
// sayHiExpression2("Eve", "Frank");

// arrow function expression
const sayHiArrow = (from, to) => {
  console.log(from + " is wishing good morning to " + to);
};

sayHiArrow("Grace", "Heidi");

// capicinno, latte, milk, hot water
function makeCappuccino() {
  console.log("Adding hot water");
  console.log("Adding milk");
  console.log("Adding coffee");
  console.log("Your cappuccino is ready!");
}

function makeLatte() {
  console.log("Adding hot water");
  console.log("Adding milk");
  console.log("Your latte is ready!");
}

function makeHotWater() {
  console.log("Adding hot water");
  console.log("Your hot water is ready!");
}

function makeMilk() {
  console.log("Adding milk");
  console.log("Your hot milk is ready!");
}

function coffeeMachine(beverage) {
  switch (beverage) {
    case "cappuccino":
      makeCappuccino();
      break;
    case "latte":
      makeLatte();
      break;
    case "hot water":
      makeHotWater();
      break;
    case "milk":
      makeMilk();
      break;
    default:
      console.log("Sorry, we don't serve " + beverage);
  }
}

function coffeeMachine1(beverage) {
  switch (beverage) {
    case "cappuccino":
      return makeCappuccino;
      break;
    case "latte":
      return makeLatte;
      break;
    case "hot water":
      return makeHotWater;
      break;
    case "milk":
      return makeMilk;
      break;
    default:
      console.log("Sorry, we don't serve " + beverage);
  }
}

// const makeBeverage = coffeeMachine1("cappuccino");
// console.log(makeBeverage);
// makeBeverage();
// coffeeMachine1("latte")();

// coffeeMachine("cappuccino");
// coffeeMachine("latte");
// coffeeMachine("hot water");
// coffeeMachine("milk");
// coffeeMachine("tea");

const helloWord = function (param1) {
  return param1("Alice", "Bob");
};

helloWord(sayHi);

// In js functions are first class citizens which means that they can be treated
// like any other value in the language. it can be assigned to a variable,
// passed as an argument to another function, and returned from another function.
