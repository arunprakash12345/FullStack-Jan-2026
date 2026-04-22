const user = {
  name: "aryan",
  age: 24,
};

// console.log(user.name);
// user.address = "delhi";
// console.log(user.address);
// delete user.address;
// console.log(user);

const handler = {
  get(target, prop) {
    console.log(`get func is called : ${prop}`);
    if (!(prop in target)) {
      return "Property doesn't exits";
    }
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`set func is called : ${prop} = ${value}`);

    // validation
    if (prop === "age" && value < 0) {
      throw new Error("Age cannot be negative");
    }

    target[prop] = value;
    return true;
  },
  deleteProperty(target, prop) {
    if (prop === "name") {
      console.log("name shouldn't be deleted");
      return false;
    }

    delete target[prop];
    return true;
  },
  has(target, prop) {
    console.log("checking if property exist");
    return prop in target;
  },
};

const proxyUser = new Proxy(user, handler);

// console.log(user.name);
// console.log(proxyUser.name);

// console.log(user.phone);
// console.log(proxyUser.phone);

// proxyUser.age = -20; // blocking the update
// console.log(proxyUser);

// delete proxyUser.name;
// console.log(proxyUser);

console.log("mlkcm" in proxyUser);
