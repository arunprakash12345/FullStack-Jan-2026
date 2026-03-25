const fs = require("fs");

// console.log("before");

// // whether this will block the thread - ?
// // const data = fs.readFileSync("f1.txt");

// fs.readFile("f1.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data.toString());
// });

// // console.log("this is file 1 data --> " + data);

// console.log("after");

console.log("before");

fs.readFile("f1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

fs.readFile("f2.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

fs.readFile("f3.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

console.log("after");
