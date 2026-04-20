const numbers = [1, 2, 3, 4, 5];
const evenOdd = {
  even: false,
};

const odds = numbers.filter(function (value, index, arr) {
  return this.even ? value % 2 === 0 : value % 2 !== 0;
}, evenOdd);

console.log(odds);

Array.prototype.myFilter = function (callback, thisArg) {
  try {
    if (typeof callback !== "function") {
      throw new TypeError(callback, " + is not a function");
    }
    if (!thisArg) {
      thisArg = {};
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  } catch (error) {
    console.log("exception occured : ", error);
  }
};

const oddsPolyfil = numbers.myFilter(function (value, index, arr) {
  return this.even ? value % 2 === 0 : value % 2 !== 0;
}, evenOdd);

console.log(oddsPolyfil);
