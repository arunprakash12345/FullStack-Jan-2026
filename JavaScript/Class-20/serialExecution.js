const fs = require("fs");

console.log("before");

function cb3(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This file data f3 - > ", data.toString());
}

function cb2(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This file data f2 - > ", data.toString());
  fs.readFile("f3.txt", cb3);
}
function cb1(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This file data f1 - > ", data.toString());
  fs.readFile("f2.txt", cb2);
}
fs.readFile("f1.txt", cb1);

console.log("after");
