// // Every object/function created in JS has an object
// // attached to it which is prototype

// const person = {
//   name: "Arun",
// };

// console.log(person);

// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("age"));

// const arr = [1, 2, 3];
// console.log(arr);

// console.log(arr.length);

// function abc() {
//   console.log("abc");
// }

// console.log(abc);

// prototype keywords belong to object defination itself
// __proto__ helps you access same prototype object using instance of an object
// function Car(model, year) {
//   this.model = model;
//   this.year = year;
//   //   this.displayInfo = function () {
//   //     return `This is a ${this.year} ${this.model}`;
//   //   };
// }

// Car.prototype.displayInfo = function () {
//   return `This is a ${this.year} ${this.model}`;
// };

// // not at all recommended
// Car.prototype.__proto__.displayGenericInfo = function () {
//   return `This is a car from year ${this.year}.`;
// };

// const car1 = new Car("Toyota Camry", 2021);
// const car2 = new Car("Honda Amaze", 2023);

// console.log(car1);
// console.log(car2);

// Prototype
// Prototype Chain
// __proto__
// how can you create a function and attach it to the prototype
// so that all instances can access that function

// ways to create obj
// 1. {} object literal
// 2. constructor function
// 3. class
// 4. object.create()

// object.create(prototype, [properties])
const carPrototype = {
  displayInfo: function () {
    return `This is a ${this.year} ${this.model}`;
  },
};

const car1 = Object.create(carPrototype, {
  model: { value: "2025" },
  name: { value: "Honda Creta" },
});

const car2 = Object.create(carPrototype);
car2.model = "2023";
car2.name = "mustang";

console.log(car1);
console.log(car2);
