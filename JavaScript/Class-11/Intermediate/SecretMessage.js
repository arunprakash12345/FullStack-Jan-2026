// Implement secretMessage(secret) that:
//     Returns a function.
//     When called, returns the stored secret.

function secretMessage(secret) {
  return function () {
    return secret;
  };
}

console.log(secretMessage("Hello")());
