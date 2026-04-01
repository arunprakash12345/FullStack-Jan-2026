const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 1 "), 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promise 2 "), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promise 3 "), 3000);
});

// all or none
// Promise.all([promise1, promise2, promise3])
//   .then((result) => console.log(result))
//   .catch((error) => console.log("all error : " + error));

// first successfull response
Promise.any([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((error) => console.log("any error : " + error));
