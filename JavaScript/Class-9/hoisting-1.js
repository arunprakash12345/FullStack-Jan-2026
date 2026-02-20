// console.log(x); // undefined
// const x = 10;
// console.log(x); // 10
// console.log(arr); // undefined
// const arr = [1, 2, 3, 4, 5];

// console.log(sayHi()); // sayHi is not a function

// const sayHi = function sayHi() {
//   return "Hi!";
// };

const a = 2;
const b = 3;

function add(x, y) {
  return x + y;
}
const addition = add(a, b);
console.log(add(addition, 5)); // 10
console.log(add(addition, a)); // 12
console.log(add(addition, b)); // 13
console.log(add(10, 12)); // 22
