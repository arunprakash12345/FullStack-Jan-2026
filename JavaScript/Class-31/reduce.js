const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function (
//   previousValue,
//   currentValue,
//   currentIndex,
//   arr,
// ) {
//   if (currentIndex == 0) {
//     previousValue.push(currentValue);
//   } else {
//     const val = previousValue[currentIndex - 1];
//     previousValue.push(val + currentValue);
//   }
//   return previousValue;
// }, []);

// console.log(sum);

Array.prototype.myReduce = function (callback, initialValue) {
  try {
    if (typeof callback !== "function") {
      throw new TypeError(callback, " + is not a function");
    }
    let previousValue = initialValue || this[0];
    for (let i = 0; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }
    return previousValue;
  } catch (error) {
    console.log("exception occured : ", error);
  }
};

const sumPolyfill = numbers.myReduce(function (
  previousValue,
  currentValue,
  currentIndex,
  arr,
) {
  if (currentIndex == 0) {
    previousValue.push(currentValue);
  } else {
    const val = previousValue[currentIndex - 1];
    previousValue.push(val + currentValue);
  }
  return previousValue;
}, []);

console.log(sumPolyfill);
