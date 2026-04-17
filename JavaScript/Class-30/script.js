// const printAllDetails = function (city, hobby) {
//   console.log(
//     `My name is ${this.firstName} ${this.lastName}, I am ${this.age}
//     years old and you can reach me out at ${this.contact} and I stay in this city ${city} and My hobby is ${hobby}`,
//   );
// };

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

// requirement change the context of this -> to the hardcoded coded

// call (arguments as comma seprated values)
// person.printAllDetails("Delhi", "Violen");
// person.printAllDetails.call(person2, "Hyderabad", "Football");

// person.printAllDetails.apply(person2, ["Hyderabad", "Football"]);

function random(args) {
  const bindedFunction = person.printAllDetails.bind(person2, ...args);
  return bindedFunction;
}

random(["Delhi", "Violen"])();
