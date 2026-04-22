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
      reject(["post1", "post2", "post3"]);
    }, 2100);
  });
}

Promise.all([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from all : ", result);
  })
  .catch((error) => {
    console.log("errors : ", error);
  });

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let total = 0;
    promises.forEach(async (item, index) => {
      try {
        const currRes = await item;
        results[index] = currRes;
        total++;
        if (total === promises.length) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

Promise.myAll([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from myall : ", result);
  })
  .catch((error) => {
    console.log("myall errors : ", error);
  });
