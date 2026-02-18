// Primitive DataTypes

// numbers
const a = 10;
const b = -10;
const c = 10.345;
const d = -10.345;
const e = 2 / 0;

// console.log(a, b, c, d, e);

// Strings
const g = "q";
const h = "hello world";

// console.log(g, h);

// boolean
const isEven = true;
const isOdd = false;

// console.log("is Even ", isEven);
// console.log("is Odd ", isOdd);

// null
let i = null;
// console.log(i);
// i = 20;
// console.log(i);

// undefined
let j;
// console.log(j);

// not defined
// console.log(k);

// typeof -> data type inside container

// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);
// console.log(typeof e, e);
// console.log(typeof g, g);
// console.log(typeof h, h);
// console.log(typeof i, i);
// console.log(typeof j, j);
// console.log(typeof isEven, isEven);

// Non-primitive or reference data types

// Arrays
// collections of values which can store different data type values
// 0 based indexing
const arr = [1, true, null, "data", ["123"]];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

// objects
const person = {
  // key: value
  firstName: "Aryan",
  lastName: "xxx",
  phoneNo: "987xxxxxxx",
  age: 20,
};

console.log(person);
console.log(typeof person);
console.log(person.firstName);
console.log(typeof person.firstName);

// functions
// when ever you want to do a specific task again and again then you create a function

// expecting parameter
function coffeeMachine(quantity, drink) {
  const item = "I need " + quantity + " " + drink;
  return item;
}

// arguments
console.log(coffeeMachine("200ml", "black coffee"));
console.log(coffeeMachine("200ml", "Mocha"));

// map
const map = new Map([
  ["name", "aryan"],
  ["age", 25],
]);
console.log(map);
console.log(map.get("name"));

// set (only unique items should be there)
const set = new Set([1, 2, 3, 1, 2, 3, 1, 2, 3]);
console.log(set);
set.add(1);
set.add(2);
console.log(set);
