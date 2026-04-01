// Fetch Multiple Dog Images (Promise.all())
// Build a simple dog image gallery that fetches three random dog images
// from "https://dog.ceo/api/breeds/image/random" in parallel using a Promise method.
// Clicking the "Get Dogs" button should display three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.
const btn = document.getElementById("fetchDogsBtn");

const fetchDogs = async () => {
  try {
    const url = [
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
    ];
    // all or none
    const response = await Promise.all(url.map((url) => fetch(url)));
    if (!response[0].ok || !response[1].ok || !response[2].ok) {
      throw new Error("Failed to fetch images");
    }
    const data = await Promise.all(response.map((res) => res.json()));
    const container = document.getElementById("dogContainer");
    container.innerHTML = "";
    data.forEach((dog) => {
      const img = document.createElement("img");
      img.src = dog.message;
      container.appendChild(img);
    });
  } catch (error) {
    window.alert(error);
  } finally {
    console.log("execution compelted");
  }
};

btn.addEventListener("click", () => {
  fetchDogs();
});
