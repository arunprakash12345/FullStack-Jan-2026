import { getInputValues, displayResult } from "./ui.js";
import { add, subtract } from "./math.js";

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");

addBtn.addEventListener("click", () => {
  const { num1, num2 } = getInputValues();
  const result = add(num1, num2);
  displayResult(result);
});

subBtn.addEventListener("click", () => {
  const { num1, num2 } = getInputValues();
  const result = subtract(num1, num2);
  displayResult(result);
});
