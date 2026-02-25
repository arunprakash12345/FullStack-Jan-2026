// Write a function createCounter(start) that returns an object with:
//     increment(): increases count.
//     decrement(): decreases count.
//     reset(): resets to initial value.

function createCounter(start) {
  let count = start;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = start;
      return count;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset()); // 5
