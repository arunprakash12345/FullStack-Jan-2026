function fetchUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise is resolved for userDetails");
    }, 2200);
  });
}

function fetchUserPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3"]);
    }, 2300);
  });
}

Promise.race([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from race : ", result);
  })
  .catch((error) => {
    console.log("errors : ", error);
  });

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      item
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myRace([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from myRace : ", result);
  })
  .catch((error) => {
    console.log("myRace errors : ", error);
  });
