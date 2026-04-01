// Create a function fakeDownload(url, callback)
// that simulates downloading a file from a URL. The function should:

// Log "Downloading from [url]...".
// Wait 2 seconds.
// Call the callback function with "Download complete!".

function fakeDownload(url, callback) {
  console.log(`Downloading from [${url}]....`);
  setTimeout(() => {
    callback("Download Complete");
  }, 2000);
}

fakeDownload("https://example.com/file", (message) => {
  console.log(message);
});

//. Take the fakeDownload function and refactor
// it to return a promise instead of using a callback

function fakeDownloadPromise(url) {
  console.log(`Downloading from [${url}]....`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Download Complete");
    }, 2000);
  });
}

fakeDownloadPromise("https://example.com/file")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));
// ==> from Promise handling to Async Await handling
async function startDownload() {
  try {
    const result = await fakeDownloadPromise("https://example.com/file");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

startDownload().then((result) => console.log(result));
