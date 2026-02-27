// These are functions that can be passed to another function as parameter
function printName(cb1, cb2, cb3) {
  // string template
  return `${cb1()} ${cb2()} ${cb3()}`;
}

// callback function
function printLastName() {
  console.log("Prakash");
}

function printFirstName() {
  console.log("Arun");
}

function PrintAge() {
  console.log("26");
}

printName(printFirstName, printLastName, PrintAge);

// Encapsulation -> making private your variables and functions
// outer world shouldn't be able to access it

// A higher order function is a function that can take one or more functions as arguments,
// or returns a function as its result

// printName -> higher order function
// printFirstName, printLastName, PrintAge - callback functions
