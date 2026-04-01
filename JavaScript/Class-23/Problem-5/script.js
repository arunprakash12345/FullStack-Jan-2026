// Task
// Implement an API retry mechanism where a request to an
// invalid API (https://jsonplaceholder.typicode.com/invalid) is attempted
// up to 3 times before showing an error message.
// Clicking "Retry Fetch" should attempt to fetch the API. The status should be updated in
//  real-time for each attempt on the page.
// If the request fails, retry up to 3 times before displaying a failure message.
// Show real-time status updates on the page for each attempt.

const fetchWithRetry = async (url, retries) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Attempt ${attempt} Failed`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      // if all retires have failed
      console.log(error);
      if (attempt === retries) {
        console.log("All attempts have failed");
        // window.alert("All attempts have failed");
      }
    } finally {
      console.log("clean up logic");
    }
  }
};

//fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 2);
