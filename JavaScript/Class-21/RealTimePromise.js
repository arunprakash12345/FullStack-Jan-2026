// if you clean the room and remove the garbage then you will get an icecream

const cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
      resolve("Cleaned The Room");
    } else {
      reject("Failed to clean the room");
    }
  });
};

const removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
      resolve(message + " and then removed garbage");
    } else {
      reject("Failed to remove the garbage");
    }
  });
};

const winIceCream = function (message) {
  return new Promise((resolve, reject) => {
    resolve(message + ", then won icecream");
  });
};

cleanRoom()
  .then(function (result) {
    return removeGarbage(result);
  })
  .then(function (result) {
    return winIceCream(result);
  })
  .then(function (result) {
    console.log("finished : ", result);
  })
  .catch(function (error) {
    console.error(error);
  });
