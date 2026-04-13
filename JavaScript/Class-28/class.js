// ES - 6

// blueprint of obj

// constructor function
// class
// constructor
// static -> not instance specific but it is class specific
// extends
// super

// count no. of pizza's created here

class Pizza {
  static totalPizzasMade = 0;
  constructor(toppings, size, crustType) {
    // properties / varibles
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizza.totalPizzasMade++;
  }
  describe() {
    console.log(
      `A ${this.size} pizze with ${this.toppings.join(", ")} on a ${this.crustType} crust.`,
    );
  }

  static calculateTotalPizzasMade() {
    console.log(`Total Pizzas Made : ${Pizza.totalPizzasMade}`);
  }
}

const pizza1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
const pizza2 = new Pizza(["veggies", "panner", "mushroom"], "regular", "thick");

console.log(pizza1);
pizza1.size = "regular";
console.log(pizza1);
// console.log(pizza2);

// Pizza.random();

class StuffedPizza extends Pizza {
  constructor(toppings, size, crustType, stuffying) {
    super(toppings, size, crustType);
    this.stuffying = stuffying;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffying} stuffing in the crust.`);
  }
}

const stuffedPizza1 = new StuffedPizza(
  ["cheese", "pepperoni"],
  "medium",
  "thick",
  "masala panner",
);

// console.log(stuffedPizza1);
