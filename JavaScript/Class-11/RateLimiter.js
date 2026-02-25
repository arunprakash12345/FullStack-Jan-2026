// create a rate limiter
function createRateLimiter(fn, limit, interval) {
  let calls = [];
  return function () {
    const now = Date.now();
    console.log(now);
    // removing calls that are older than interval
    calls = calls.filter(function (time) {
      if (now - time < interval) {
        return true;
      }
      return false;
    });

    if (calls.length > limit) {
      console.log("Rate limit exceeded. Try again later.");
      return;
    }
    calls.push(now);
    fn();
  };
}

// costly api
function sayHello() {
  console.log("Hello");
}
// interval is in milliseconds
// limit is number
// fn -> api call
const fn = createRateLimiter(sayHello, 3, 10000);
fn();
fn();
fn();
setTimeout(fn, 1100);
setTimeout(fn, 1200);
setTimeout(fn, 1200);

// function rateLimiter(fn, limit, interval) {
//   let count = 0;
//   setInterval(function () {
//     count = 0;
//   }, interval);
//   return function () {
//     if (count < limit) {
//       count++;
//       fn();
//     }
//   };
// }

// console.log(
//   [2, 3, 4, 5, 6].filter(function (num) {
//     if (num % 2 === 0) {
//       return true;
//     }
//     return false;
//   }),
// );
