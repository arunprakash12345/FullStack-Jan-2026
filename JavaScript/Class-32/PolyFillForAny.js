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
      reject(["post1", "post2", "post3"]);
    }, 2300);
  });
}

Promise.any([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from any : ", result);
  })
  .catch((error) => {
    console.log("errors any : ", error);
  });

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const rejections = [];
    let rejectedCount = 0;
    promises.forEach(async (item, index) => {
      try {
        const result = await item;
        resolve(result);
      } catch (error) {
        rejections[index] = error;
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject(rejections);
        }
      }
    });
  });
};

Promise.myAny([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from myAny : ", result);
  })
  .catch((error) => {
    console.log("errors myAny : ", error);
  });
