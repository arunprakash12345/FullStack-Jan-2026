const nestedObj = {
  a: 1,
  b: {
    c: [2, [3, 4]],
    d: {
      e: 3,
    },
  },
};

const op = {
  a: 1,
  "b.c": [2, 3, 4],
  "b.d.e": 3,
};

const result = {};
function flattenObject(obj, prefix = "") {
  for (let key in obj) {
    const updatedKey = prefix === "" ? key : prefix + "." + key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], updatedKey);
    } else {
      result[updatedKey] = obj[key];
    }
  }
  return result;
}

console.log(flattenObject(nestedObj));
