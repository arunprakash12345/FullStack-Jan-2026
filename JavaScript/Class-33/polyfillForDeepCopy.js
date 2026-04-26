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

// function, object, array
function deepCopy(obj) {
    // return JSON.parse(JSON.stringify(obj));
    // if obj is primitive then return that obj itself
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }

    if(obj instanceof Function) {
        return obj.bind({});
    }

    if(obj instanceof Array) {
        let copy = [];
        // [1,2,3]
        for(let i=0; i<obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    if(obj instanceof Object) {
        let copy = {};
        for(let attr in obj) {
            copy[attr] = deepCopy(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to Copy Obj ! Its type is not supported")
}

const zoo2 = deepCopy(zoo)
zoo2.location = "Delhi, India",
zoo2.animals[0].favouriteTreat = "Boiled Meat"
console.log(zoo, zoo2)