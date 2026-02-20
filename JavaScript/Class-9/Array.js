const a = [1, 2, 3];
const b = [4, 5, 6];

// concat
const c = a.concat(b);
// console.log(c);
// console.log(a);
// console.log(b);

// slice(start, end) - end is exclusive [1,2,3,4,5,6]
const d = c.slice(2, 5); // 2,3,4 [3,4,5]
// console.log(d);
// console.log(c);

// splice
// replace/remove
// splice(start, how many of the element you want to delete/remove, replacing element)
// c: [1, 2, 3, 4, 5, 6]
// const e = c.splice(1, 2);
// console.log(e);
// console.log(c); // [1, 4, 5, 6]

const f = c.splice(1, 2, 789);
console.log(f);
console.log(c);
