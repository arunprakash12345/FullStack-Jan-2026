// We are given an array, which has the radius of different circles,
// we need to find the area, circumference and diameter for all the radiuses.

const radiusArr = [2, 3, 4, 5, 6, 7, 8];

function calculateArea(radiusArr) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    const currR = Math.PI * radiusArr[i] * radiusArr[i];
    result.push(currR);
  }
  return result;
}

function calculateDiameter(radiusArr) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    const currR = 2 * radiusArr[i];
    result.push(currR);
  }
  return result;
}

function calculateCircumference(radiusArr) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    const currR = 2 * Math.PI * radiusArr[i];
    result.push(currR);
  }
  return result;
}

const area = calculateArea(radiusArr);
console.log("This is an area arr ", area);

const circumference = calculateCircumference(radiusArr);
console.log("This is an circumference arr ", circumference);

const diameter = calculateDiameter(radiusArr);
console.log("This is an diameter arr ", diameter);
