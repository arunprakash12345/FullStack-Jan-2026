// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.

// regex

function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    return "Input must be a string";
  }
  const words = sentence.split(" ");
  const reversed = [];
  while (words.length > 0) {
    reversed.push(words.pop());
  }
  return reversed.join(" ");

  // return sentence.split(" ").reverse().join(" ");
}
