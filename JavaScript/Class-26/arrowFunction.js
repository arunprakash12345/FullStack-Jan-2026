// // ES-6

// // arrow function doesnt have its own this
// // it inherits this value

// const obj2 = {
//   a: 12,
//   b: this,
//   fn: () => {
//     console.log(this); // {}
//   },
// };

// obj2.fn();
// // obj2.fn() => fn()
// // fn();
// console.log(obj2);

// const obj3 = {
//   b: 13,
//   fn: () => {
//     console.log(this); // -> obj2, {}
//     const nestedFunction = () => {
//       console.log(this); // obj2, {}
//     };
//     nestedFunction();
//   },
// };

// obj3.fn();

const obj = {
  name: "aryan",
  print: function () {
    // this -> obj
    setTimeout(() => {
      console.log(this); // global/window -> arrow -> obj
      console.log(this.name); // obj.name -> aryan => undefined
    }, 1000);
  },
};

obj.print();
