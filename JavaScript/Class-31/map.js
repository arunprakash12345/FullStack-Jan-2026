const numbers = [1, 2, 3, 4, 5];

const mutliplier = {
  factor: 4,
};

// returns a new array
const op = numbers.map(function (value, index, arr) {
  return value * [this.factor];
}, mutliplier);

console.log(op);

// create a polyfill for map => myMap
// map is available on array prototype
Array.prototype.myMap = function (callback, thisArg) {
  try {
    if (typeof callback !== "function") {
      throw new TypeError(callback, " + is not a function");
    }
    if (!thisArg) {
      thisArg = {};
    }
    const result = [];
    // this -> numbers array itself
    for (let i = 0; i < this.length; i++) {
      const res = callback.call(thisArg, this[i], i, this);
      result.push(res);
    }
    return result;
  } catch (error) {
    console.log("exception occured : ", error);
  }
};

const op1 = numbers.myMap(function (value, index, arr) {
  return value * [this.factor];
}, mutliplier);

console.log(op1);
