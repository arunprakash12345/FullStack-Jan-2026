// any or every function which has async keyword added it will return us promise
// async function fetchData() {
//   return {
//     firstName: "Aryan",
//     lastName: "Thakur",
//   };
// }

// console.log(fetchData());
// const dataPromise = fetchData();

// dataPromise.then((data) => {
//   console.log(data);
// });

// const promise = new Promise((resolve, reject) => {
//   resolve({
//     firstName: "Aryan",
//     lastName: "Thakur",
//   });
// });
// async function fetch() {
//   return promise;
// }

// // promise of Promises => promise

// // async -> always return a promise
// // while we declared a function with already returning promise
// // then it wont mask as P of P
// // since it all care of return type to be promise
// console.log(fetch());

// fetch().then((d) => console.log(d));

// await

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise resolved");
  }, 5000);
});

console.log("before fn() "); //sync - 1
async function fn() {
  try {
    console.log("before"); // sync - 3
    //   promise.then((d) => console.log(d));
    const data = await promise; // then === await
    console.log(data); // 5
    console.log("after"); // 6
    return data;
  } catch (error) {
    console.log("error caught : ", error);
  } finally {
    // any clean up
  }
}

console.log(fn()); // 2

console.log("after fn()"); // sync. - 4
