const fs = require("fs");

// producer
let promiseReadFile1 = fs.promises.readFile("f1.txt");
let promiseReadFile2 = fs.promises.readFile("f2.txt");
let promiseReadFile3 = fs.promises.readFile("f3.txt");

// consume
promiseReadFile1
  .then((data) => {
    console.log(data.toString());
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    promiseReadFile1 = null;
    console.log("f1 reading is completed");
  });

promiseReadFile2
  .then((data) => {
    console.log(data.toString());
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    promiseReadFile2 = null;
    console.log("f2 reading is completed");
  });

promiseReadFile3
  .then((data) => {
    console.log(data.toString());
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    promiseReadFile3 = null;
    console.log("f3 reading is completed");
  });
