// Write a function convertTemperature(temp, unit) that:
//   Converts Celsius to Fahrenheit and vice versa.
//   Returns the converted temperature.
//   Example: convertTemperature(100, "C") → 212F.

// C -> F: (C * 9/5) + 32
// F -> C: (F - 32) * 5/9

function convertTemperature(temp, unit) {
  if (typeof temp !== "number") {
    return "Temperature must be a number";
  }
  const u = unit.toUpperCase();
  switch (u) {
    case "C":
      return (temp * 9) / 5 + 32 + "F";
    case "F":
      return ((temp - 32) * 5) / 9 + "C";
    default:
      return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
  }
}

// console.log(convertTemperature(100.5, "C"));
// console.log(convertTemperature(212, "F"));
// console.log(convertTemperature(100, "X"));
// console.log(convertTemperature("100", "C"));

//  == vs === && != vs !==

console.log(1 === 1);
console.log(1 == 1); // comparing only values
console.log(1 == "1"); // false (only compare values, not types)
console.log(1 === "1"); // false (compare both values and types)
