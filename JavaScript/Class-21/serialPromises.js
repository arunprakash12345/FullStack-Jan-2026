const fs = require("fs");

// fs.promises.readFile("f1.txt").then((data) => {
//   console.log(data.toString());
//   fs.promises.readFile("f2.txt").then((data) => {
//     console.log(data.toString());
//     fs.promises.readFile("f2.txt").then((data) => {
//       console.log(data.toString());
//     });
//   });
// });

let f1p = fs.promises.readFile("f1.txt");
let f2p = fs.promises.readFile("f2.txt");
let f3p = fs.promises.readFile("f3.txt");

f1p
  .then((data) => {
    console.log(data.toString());
    return f2p;
  })
  .then((data) => {
    console.log(data.toString());
    return f3p;
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    f1p = null;
    f2p = null;
    f3p = null;
  });
