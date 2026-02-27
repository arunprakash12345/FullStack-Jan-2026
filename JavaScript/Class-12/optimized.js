// HOF & callback
const radiusArr = [2, 3, 4, 5, 6, 7, 8];

function calculate(radiusArr, logic) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(logic(radiusArr[i]));
  }
  return result;
}

function circleArea(radius) {
  return Math.PI * radius * radius;
}

function circleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function circleDiameter(radius) {
  return 2 * radius;
}

const area = calculate(radiusArr, circleArea);
console.log("This is an area arr ", area);

const circumference = calculate(radiusArr, circleCircumference);
console.log("This is an circumference arr ", circumference);

const diameter = calculate(radiusArr, circleDiameter);
console.log("This is an diameter arr ", diameter);
