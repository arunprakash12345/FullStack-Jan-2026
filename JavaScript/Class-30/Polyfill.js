const person = {
  firstName: "Aryan",
  lastName: "Thakur",
  age: 23,
  contact: "+91720XXXXX",
  printAllDetails: function (city, hobby) {
    console.log(
      `My name is ${this.firstName} ${this.lastName}, I am ${this.age}
    years old and you can reach me out at ${this.contact} and I stay in this city ${city} and My hobby is ${hobby}`,
    );
  },
};

const person2 = {
  firstName: "Arun",
  lastName: "Prakash",
  age: 25,
  contact: "+919159xxxxxx",
};

// myCall
// call -> ?
Function.prototype.myCall = function (context = {}, ...args) {
  // this -> ? window or something / function
  console.log(this); // function itself
  // function (printAllDetails) -> context (person2/fn)
  // context =>   {
  //   firstName: "Arun",
  //   lastName: "Prakash",
  //   age: 25,
  //   contact: "+919159xxxxxx",
  // }
  context.newFn = this;
  // context =   {
  //   firstName: "Arun",
  //   lastName: "Prakash",
  //   age: 25,
  //   contact: "+919159xxxxxx",
  //   newFn : printAllDetails
  // }
  context.newFn(...args);
  delete context.newFn;
};

Function.prototype.myApply = function (context = {}, args) {
  context.newFn = this;
  context.newFn(...args);
  delete context.newFn;
};

Function.prototype.myBind = function (context = {}, ...args) {
  // const printAllDetails = this;
  // return function () {
  //   context.newFn = printAllDetails;
  //   context.newFn(...args);
  //   delete context.newFn;
  // };
  return () => {
    context.newFn = this;
    context.newFn(...args);
    delete context.newFn;
  };
};

// person.printAllDetails.call(person2, "Hyderabad", "Football");
person.printAllDetails.myCall(person2, "Hyderabad", "Football");
person.printAllDetails.myApply(person2, ["Hyderabad", "Football"]);

const bindedFunction = person.printAllDetails.myBind(
  person2,
  "Hyderabad",
  "Football",
);

bindedFunction();
