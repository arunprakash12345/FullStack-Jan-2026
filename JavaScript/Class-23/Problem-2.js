// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur

// fetchCatFact
// fetch builtin in browser (web api)

// function fetchCatFact() {
//   fetch("https://catfact.ninja/fact")
//     .then((result) => result.json())
//     .then((res) => console.log(res.fact))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("data is fetched"));
// }

// fetchCatFact();

async function fetchCatFact() {
  try {
    const result = await fetch("https://catfact.ninja/fact");
    const res = await result.json();
    console.log(res.fact);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("data is fetched");
  }
}

fetchCatFact();
