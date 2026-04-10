// this

//1
console.log(this); // window
console.log(this === window);

//2
function fnGlobal() {
  console.log(this); // { } => ? (window)
}

fnGlobal();

//3
const obj = {
  a: 12,
  fn: function () {
    console.log(this); // ? this -> obj
  },
};

obj.fn();

// 4

const obj2 = {
  b: 13,
  fn: function () {
    console.log(this); // -> obj2
    const nestedFunction = function () {
      console.log(this); // window
    };
    nestedFunction();
  },
};

obj2.fn();

// 5
const obj3 = {
  c: 20,
  fn: function () {
    console.log(this); // -> obj2
    const nestedFunction = function () {
      console.log(this); // window
    };
    return nestedFunction;
  },
};

const fn = obj3.fn();

fn();
