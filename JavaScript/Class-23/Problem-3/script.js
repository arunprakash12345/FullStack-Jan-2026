// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button,
// fetch user details and display them on the page, including:

// Full Name
// Email
// Country
// Handle API errors and provide appropriate feedback if the fetch fails.

const btn = document.querySelector("#fetchUserBtn");
const nameElem = document.querySelector("#userName");
const emailElem = document.querySelector("#userEmail");
const countryElem = document.querySelector("#userCountry");

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (
      response?.status !== 200 &&
      response?.statusText !== "OK" &&
      !response?.ok
    ) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const userInfo = data?.results[0];
    const fullName = `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`;
    const email = userInfo?.email;
    const country = userInfo?.location?.country;
    nameElem.innerText = fullName;
    emailElem.innerText = email;
    countryElem.innerText = country;
  } catch (error) {
    window.alert("Error while fetch data .... ", error);
  } finally {
    console.log("Execution of fetchRandom user is completed");
  }
}

btn.addEventListener("click", () => {
  fetchRandomUser();
});
