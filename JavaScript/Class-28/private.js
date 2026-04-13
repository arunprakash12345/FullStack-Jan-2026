class Pizzas {
  static totalPizzasMade = 0;

  //private variable
  #toppings;
  #size;
  #crustType;

  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    Pizzas.totalPizzasMade++;
  }

  get toppings() {
    return this.#toppings;
  }

  get size() {
    return this.#size;
  }

  get crustType() {
    return this.#crustType;
  }

  set size(newSize) {
    this.#size = newSize;
  }

  set crustType(newCrustType) {
    this.#crustType = newCrustType;
  }

  set toppings(newToppings) {
    this.#toppings = newToppings;
  }

  describe() {
    console.log(
      `A ${this.size} pizze with ${this.toppings.join(", ")} on a ${this.crustType} crust.`,
    );
  }
}

class StuffedPizza extends Pizzas {
  #stuffying;

  constructor(toppings, size, crustType, stuffying) {
    super(toppings, size, crustType);
    this.stuffying = stuffying;
  }

  set stuffying(newStuffying) {
    this.#stuffying = newStuffying;
  }

  get stuffying() {
    return this.#stuffying;
  }

  describeStuffing() {
    console.log(`This pizza has ${this.stuffying} stuffing in the crust.`);
  }

  describe() {
    super.describe();
    this.describeStuffing();
  }
}

const pizza1 = new Pizzas(["cheese", "pepperoni"], "medium", "thin");
const stuffedPizza1 = new StuffedPizza(
  ["cheese", "pepperoni"],
  "medium",
  "thick",
  "masala panner",
);
