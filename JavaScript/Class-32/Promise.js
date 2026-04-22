// all, allsettled, race, any

// you have multiple promises (ex an array of promises)
// which you need to execute in parallel

function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved for userDetails");
    }, 2200);
  });
}

function fetchUserPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3"]);
    }, 2100);
  });
}

// Promise.all() - only when all promises are resolved Promise.all will be resolved
// or else even if one of the promise is rejected Promise.all will be rejected

// Promise.all([fetchUserDetails(), fetchUserPosts()])
//   .then((result) => {
//     console.log("response from all : ", result);
//   })
//   .catch((error) => {
//     console.log("errors : ", error);
//   });

// Promise.race() -> resolve, rejected (but the faster result is what matters)
// Promise.race([fetchUserDetails(), fetchUserPosts()])
//   .then((result) => {
//     console.log("response from race : ", result);
//   })
//   .catch((error) => {
//     console.log("errors : ", error);
//   });

// Promise.allsettled() -> fetches all result (either it is resolved or rejected)
// Promise.allSettled([fetchUserDetails(), fetchUserPosts()])
//   .then((result) => {
//     console.log("response from allsettled : ", result);
//   })
//   .catch((error) => {
//     console.log("errors : ", error);
//   });

// Promise.any() -> it looks for anyone of positive output
// [p1,p2,p3] -> even if one is resolved it will return that

Promise.any([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from allsettled : ", result);
  })
  .catch((error) => {
    console.log("errors : ", error);
  });
