// Your mission is to create a Space Facts Aggregator that
// fetches interesting facts about space from multiple free APIs.
//  Since APIs can sometimes be slow or unreliable, you’ll use Promise.any()
// to fetch data from three different sources at once and display the
// first successful response.

// 🔹 User Flow:
// 1️⃣ The user clicks the "Get Space Fact" button.
// 2️⃣ The app sends three simultaneous API requests to fetch space facts.
// 3️⃣ The first successful API response is displayed on the screen.
// 4️⃣ If all APIs fail, an error message is shown instead.

// If the first API returns a fact, display the "explanation" key as "🌌 NASA Fact: [fact]".
// If the second API returns a fact, display the "summary" key as "🚀 SpaceX: [fact]".
// If the third API returns a fact, display the number of astronauts in space as "👨‍🚀 There are currently [number] astronauts in space!".
const btn = document.getElementById("fetchFactBtn");

const fetchSpaceFact = async () => {
  const container = document.getElementById("factContainer");
  try {
    const urls = [
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
      "https://api.spacexdata.com/v4/company",
      "http://api.open-notify.org/astros.json",
    ];
    const response = await Promise.any(urls.map((url) => fetch(url)));
    if (!response.ok) {
      throw new Error("All apis are failing");
    }
    const data = await response.json();
    let fact = "";
    if (data?.explanation) {
      fact = `🌌 NASA Fact: ${data?.explanation}`;
    } else if (data?.summary) {
      fact = `🚀 SpaceX: ${data?.summary}`;
    } else if (data?.people) {
      fact = `👨‍🚀 There are currently ${data?.number} astronauts in space!`;
    } else {
      throw new Error("No valid fact found");
    }
    container.style.display = "block";
    container.innerHTML = `<p class="fact-text">${fact} </p>`;
  } catch (error) {
    container.style.display = "block";
    container.innerHTML = `<p class="fact-text">Failed to fetch Space Fact </p>`;
  }
};

btn.addEventListener("click", () => {
  fetchSpaceFact();
});
