const starContainer = document.querySelector(".star_container");
const counterElem = document.querySelector("#count");

starContainer.addEventListener("click", (e) => {
  const currentStar = e.target;
  if (!currentStar.hasAttribute("idx")) {
    return;
  }
  const ratings = parseInt(currentStar.getAttribute("idx"));
  counterElem.innerText = ratings;
  changeStars(ratings);
});

starContainer.addEventListener("mouseover", (e) => {
  const currentStar = e.target;
  if (!currentStar.hasAttribute("idx")) {
    return;
  }
  const ratings = parseInt(currentStar.getAttribute("idx"));
  changeStars(ratings);
});

starContainer.addEventListener("mouseleave", (e) => {
  changeStars(parseInt(counterElem.innerText));
});

function changeStars(ratings) {
  const starArr = document.querySelectorAll(".star");
  for (let i = 0; i < starArr.length; i++) {
    starArr[i].classList.remove("yellow");
  }
  for (let i = 0; i < ratings; i++) {
    starArr[i].classList.add("yellow");
  }
}
