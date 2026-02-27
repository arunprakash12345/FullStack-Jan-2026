let c = 0;
// an impure function is a function that contains one or more side effects.
// it can mutate data outside its scope and doen't predictably produce same output
// ex : stockmarket
function sum(a, b) {
  return a + b + c++;
}

// a pure function is a function without any side effects,
// it will provide the same output from the same inputs
// ex : FD
function sum1(a, b) {
  return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2)); // 4
console.log(sum(1, 2)); // 5

console.log(sum1(1, 2)); // 3
console.log(sum1(1, 2)); // 3
console.log(sum1(1, 2)); // 3
