// variable or function -> named export

export function getInputValues() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  return { num1, num2 };
}

export function displayResult(value) {
  document.getElementById("result").innerText = "Result : " + value;
}
