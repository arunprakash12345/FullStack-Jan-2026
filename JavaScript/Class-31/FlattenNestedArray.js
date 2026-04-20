const nestedArray = [1, [2, 3], [4, [5, 6], 7]];

// op = [1,2,3,4,5,6,7]
// write a function to implement this bheviours

//[4, [5, 6], 7]
// [4,5,6,7]
function flattenArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const res = flattenArray(arr[i]);
      result.push(...res);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// function flattenArrayReduce(arr) {
//   return arr.reduce((flattendArr, item) => {
//     return flattendArr.concat(
//       Array.isArray(item) ? flattenArrayReduce(item) : item,
//     );
//   }, []);
// }

console.log(flattenArray(nestedArray));
// console.log(flattenArrayReduce(nestedArray));
