const date = new Date();
console.log(date);
// 2026-02-27T03:06:58.163Z
// 5: 30 mins ?
// UTC
// +5:30

console.log(
  date.getHours() + " " + date.getMinutes() + " " + date.getSeconds(),
);

console.log(
  date.getUTCHours() + " " + date.getUTCMinutes() + " " + date.getUTCSeconds(),
);

console.log(date.getTimezoneOffset());
console.log(date.getTime());

const date1 = new Date("2026-02-27T03:06:58.163Z");
console.log(date1);
