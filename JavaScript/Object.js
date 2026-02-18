// base model of car
const car = {
  name: "Amaze",
  brand: "Honda",
  year: 2025,
};

// adding new key: value pairs in object
car.AC = true;
car.sunroof = true;
car.cameraAllSides = true;
// console.log(car);

// modifying exisiting data
car.sunroof = false;

// read data from object
// console.log(car.name);

// console.log(car);

delete car.sunroof;

// console.log(car);

// CRUD

// utility functions

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// for-in
for (let key in car) {
  console.log(key);
  console.log(car[key]);
  //   console.log(car.key);
}
