"use strict";
console.log(this); // {}

function fnGlobal() {
  console.log(this); // undefined
}

// fnGlobal();

const obj = {
  a: 12,
  fn: function () {
    console.log(this); // obj
  },
};

// obj.fn();

const obj2 = {
  b: 13,
  fn: function () {
    console.log(this); // -> obj2
    const nestedFunction = function () {
      console.log(this); // undefined
    };
    nestedFunction();
  },
};

// obj2.fn();

const obj3 = {
  c: 20,
  fn: function () {
    console.log(this); // -> obj3
    const nestedFunction = function () {
      console.log(this); // undefined
    };
    return nestedFunction;
  },
};

const fn = obj3.fn();

fn();
