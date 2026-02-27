// map, filter, reduce
const arr = [1, 2, 3, 4, 5];

const sqArr = [];
for (let i = 0; i < arr.length; i++) {
  sqArr.push(arr[i] * arr[i]);
}

// map is an higher order function
// func is callback here
// map -> iterates over arr and return new array doesnt mutate original array
const mapSqArr = arr.map(function (val, idx, arr) {
  console.log("value  : ", val, " index : ", idx);
  return val * val;
});

console.log(mapSqArr);
console.log(sqArr);

const transactions = [1000, 3000, 2000, -2500, 3800, 1300];
const inrToUSD = 90;
console.log(transactions.map((transaction) => transaction / inrToUSD));

console.log("------------------------------------------");
// Filter
// filter the array based on boolean check (filter returns us new array and doesn't
// manipulate exisiting array)
// return true -> it will be stored result
// return false -> it will be ignored

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const evenArr = myArr.filter((num) => num % 2 == 0);
const oddArr = myArr.filter((num) => num % 2 != 0);
console.log(evenArr, oddArr);

const transactionGreaterthan1k = transactions.filter((val) => val > 1000);
console.log(transactionGreaterthan1k);

console.log("-----------");

function prefixSum(arr) {
  const result = [];
  result.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    result.push(result[i - 1] + arr[i]);
  }
  return result;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(prefixSum([1, 2, 3, 4, 5]));
console.log(sum([1, 2, 3, 4, 5]));

// reduce

const totalSum = [1, 2, 3, 4, 5].reduce(function (prevVal, currVal, idx, arr) {
  console.log("prevval : ", prevVal, "currVal : ", currVal);
  prevVal += currVal;
  return prevVal;
}, 0);

const prefixSum1 = [1, 2, 3, 4, 5].reduce(function (
  prevVal,
  currVal,
  idx,
  arr,
) {
  if (prevVal.length == 0) {
    prevVal.push(currVal);
  } else {
    prevVal.push(prevVal[idx - 1] + currVal);
  }
  return prevVal;
}, []);
console.log(totalSum);
console.log(prefixSum1);
