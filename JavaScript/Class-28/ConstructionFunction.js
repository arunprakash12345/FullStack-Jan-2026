// pizza shop

function Pizza1(toppings, size, crustType) {
  this.toppings = toppings;
  this.size = size;
  this.crustType = crustType;
  this.describe = function () {
    console.log(
      `A ${this.size} pizze with ${this.toppings.join(", ")} on a ${this.crustType} crust.`,
    );
  };
}

const pizza3 = new Pizza1(["cheese", "pepperoni"], "medium", "thin");
const pizza4 = new Pizza1(
  ["veggies", "panner", "mushroom"],
  "regular",
  "thick",
);

// console.log(pizza3);
// console.log(pizza4);
