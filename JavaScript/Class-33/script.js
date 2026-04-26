let a = 10;
// a new copy is created and assigned (similar like pass by value)
let b = a;
b = 20;

console.log(a, b)

// pass by references
const zoo = {
    name: "Amazing Zoo",
    location: "Hyderabad, India",
    animals: [
        {
            species: "Lion",
            favouriteTreat: "Meat"
        },
        {
            species: "Panda",
            favouriteTreat: "Leaves"
        }
    ]
}

// const zoo1 = zoo;

// zoo1.location = "Melbourne, Australia";

// console.log(zoo);

// pass by references -> pass by value (clone the object)

// destructuring -> shallow copy

const zoo1 = {...zoo};

zoo1.location = "Melbourne, Australia";
zoo1.animals[0].species = "Lioness"

console.log(zoo, zoo1);

// shallow copy -> just iterating and pick up each (key, value) pair and 
// adding it to new object (Note: whether the copy it is pure copy vs shallow 
// copy is decided by data type of value of property)

console.log(zoo1.animals === zoo.animals);

// deep copy 
// pass by reference -> pass by value
// object into string
// non-primitive -> primitive -> non - primitive
// obj -> string -> obj

const zoo2 = JSON.stringify(zoo);
const deepCopyZoo2 = JSON.parse(zoo2);
console.log(deepCopyZoo2);

deepCopyZoo2.location = "Delhi, India",
deepCopyZoo2.animals[0].favouriteTreat = "Boiled Meat"
console.log(deepCopyZoo2)