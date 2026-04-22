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
    }, 2300);
  });
}

Promise.allSettled([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from allSettled : ", result);
  })
  .catch((error) => {
    console.log("errors allSettled : ", error);
  });

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    promises.forEach(async (item, index) => {
      try {
        const currRes = await item;
        results[index] = { status: "fullfilled", value: currRes };
      } catch (error) {
        results[index] = { status: "rejected", reason: error };
      } finally {
        count++;
        if (count === promises.length) {
          resolve(results);
        }
      }
    });
  });
};

Promise.myAllSettled([fetchUserDetails(), fetchUserPosts()])
  .then((result) => {
    console.log("response from myAllSettled : ", result);
  })
  .catch((error) => {
    console.log("errors myAllSettled : ", error);
  });
