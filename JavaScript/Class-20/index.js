// console.log("start"); // sync

// function fn() {
//   for (let i = 0; i < 1; i++) {
//     console.log("hello");
//   }
// }
// // fn();

// setTimeout(() => {
//   fn();
// }, 1000);

// console.log("end");

// console.log("before");
// setTimeout(function fn() {
//   console.log("fn : " + 1000);
// }, 1000);
// setTimeout(function fn() {
//   console.log("fn : " + 500);
// }, 500);
// console.log("after");

console.log("before"); // 1ms
const cb1 = () => {
  console.log("hello"); // 6secs +
};
const cb2 = () => {
  let timeInFuture = Date.now() + 5000; // 5sec
  while (Date.now() < timeInFuture) {}
  console.log("hello 2"); // 6secs
};
setTimeout(cb2, 1000); // 2ms
setTimeout(cb1, 2000); // 3ms
console.log("after"); // 4ms

// order -> before after hello2 hello
// time -> 6sec
