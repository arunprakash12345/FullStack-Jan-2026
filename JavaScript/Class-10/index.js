// console.log(window.a);
// const a = 10;
// test();
// function test() {
//   console.log("Hello World");
// }

// function sum(a, b) {
//   var c = 10;
//   return a + b + c;
// }

// console.log(sum(1, 2));
// console.log(c);

// var is not block scoped, it is function scoped.
// So it can be accessed outside the block.
// where as const and let are block scoped, they cannot be accessed outside the block.
// and also let and const are function scoped, they cannot be accessed outside the function.

// {
//   const a = 10;
//   console.log(a);
//   var b = 20;
//   console.log(b);
// }

// if (true) {
//   const a = 10;
//   var b = 20;
// }
// console.log(a);
// console.log(b);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// 0,1,2,3,4
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// lexical scope / or lexical environment
// const a = 20;

// function parent() {
//   console.log(a);
//   const b = 10;
//   function child() {
//     console.log("inside b:", b);
//     console.log("inside a:", a);
//   }
//   return child;
// }

// const funcChild = parent();
// funcChild();

// closure -> formed -> when a function is returned from another function

// A closure is a function which is Binded
// with it's lexical Environments no matter if you Return
// and call it outside it will still have access to the properties of its parents/variables.

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     return count;
//   }
//   return inner;
// }

// // 1 1 1
// const innerFunc = outer();
// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());

// const innerFunc1 = outer();
// console.log(innerFunc1());
// console.log(innerFunc1());
// console.log(innerFunc1());

function createCounter(init, delta) {
  function count() {
    init = init + delta;
    return init;
  }
  return count;
}

const counter1 = createCounter(0, 1);
console.log(counter1());
console.log(counter1());
console.log(counter1());
