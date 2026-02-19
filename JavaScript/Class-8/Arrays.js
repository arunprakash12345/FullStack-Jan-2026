const arr = [1, 2, 3, 4, 5];

// add a new element at last
// remove a element from last
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

// shift and unshift

// unshift is used to add number/ data type at starting index
arr.unshift(789);
console.log(arr);
// shift is used to remove number/data type from starting index
arr.shift();
console.log(arr);

// different types of loops
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-each
arr.forEach((val, idx) => {
  console.log(val, idx);
});

// for  - of
for (let val of arr) {
  console.log(val);
}
