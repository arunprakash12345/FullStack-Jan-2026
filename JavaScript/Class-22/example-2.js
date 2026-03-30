const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";

const myFetchUrl = (url) => {
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log(error));
};

// myFetchUrl(POST_URL)
//   .then((data) => {
//     console.log("post : ", data);
//     return myFetchUrl(COMMENT_URL);
//   })
//   .then((data) => {
//     console.log("comments : ", data);
//     return myFetchUrl(USER_URL);
//   })
//   .then((data) => {
//     console.log("user : ", data);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("execution is completed");
//   });

// async function getAllInfo() {
// sequence calls
//   try {
//     const userData = await myFetchUrl(USER_URL);
//     const postData = await myFetchUrl(POST_URL);
//     const commentsData = await myFetchUrl(COMMENT_URL);
//     console.log(userData, postData, commentsData);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("execution is completed");
//   }
// }

async function getAllInfoParallel() {
  try {
    // parallel calls
    const data = await Promise.all([
      myFetchUrl(USER_URL),
      myFetchUrl(POST_URL),
      myFetchUrl[COMMENT_URL],
    ]);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("execution is completed");
  }
}

getAllInfoParallel();
