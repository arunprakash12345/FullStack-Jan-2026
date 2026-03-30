// In JavaScript, a promise is an object representing the
// eventual completion or failure of an asynchronous operation.

// It provides a way to handle asynchronous code more cleanly
// and manage the results or errors that may occur when the operation completes.

// Promises have three states: pending, resolved (fulfilled), or rejected,
// and they allow you to attach callback functions to handle these different
// outcomes.

// create a promise [Producer]
// coinToss
let coinToss = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // tossing up coin (0.0 - 0.9)
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      resolve("Heads");
    } else {
      reject(
        "Tails - coin toss resulted in tails, considered as a fail for this example",
      );
    }
  }, 1000);
});

console.log(coinToss);

// Consumer Logic

// // the cb function provided in then will be called only if promise is resolved
// coinToss.then((result) => {
//   console.log(result);
// });

// // the cb function provided in catch will be called only if promoise is reject
// coinToss.catch((error) => {
//   console.log(error);
// });

// // finally - resolve | rejected
// coinToss.finally(() => {
//   coinToss = null;
//   console.log("coin toss is completed");
// });

coinToss
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    coinToss = null;
    console.log("coin toss is completed");
  });
