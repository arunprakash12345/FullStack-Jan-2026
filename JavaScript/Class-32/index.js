localStorage.setItem("username", JSON.stringify({ firstName: "arun" }));
// localStorage.getItem("username");
// localStorage.removeItem("username");
// localStorage.clear();

sessionStorage.setItem("theme", "dark");
sessionStorage.getItem("theme");
sessionStorage.removeItem("theme");

const date = new Date();

document.cookie = `name: arunprakash,expires=${date}`;

console.log(document.cookie);
