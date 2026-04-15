// 1. __proto__ to null

// const obj = { name: "sample object" }; // prototype : Object

// console.log(obj.toString());

// obj.__proto__ = null;

// console.log(obj.toString());

// 2. constructor property manipulation

function Animal() {}

Animal.prototype.animalSpeak = function () {
  console.log("Sound !");
};

function Dog() {}

// extends
// Dog.prototype = Animal.prototype;
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.dogSpeak = function () {
  console.log("Bow Bow ! ");
};

const dog1 = new Dog();
console.log(dog1.dogSpeak());
console.log(dog1.constructor.name);

// never do this
Object.prototype.method; // XXX

// cicular prototype chain

function A() {}
function B() {}

let a = new A();
let b = new B();

// Attempt to create a circular prototype chain
A.prototype = b;

console.log(a);

// try {
//   B.prototype = a;
// } catch (error) {
//   console.log("Error: ", error);
// }

// direct prototype assignment
function Cat(name) {
  this.name = name;
}
Cat.prototype = { age: 5 };

const fluffy = new Cat("Fluffy");
const fluffy1 = new Cat("Fluffy1");

// fluffy.__proto__ = { age: 5 };

console.log(fluffy.age);
console.log(fluffy.hasOwnProperty("age"));
console.log(fluffy.hasOwnProperty("name"));
console.log(fluffy.__proto__ === Cat.prototype); // false

console.log(fluffy1);
