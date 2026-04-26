 // false, 0, -0, "", null, undefined, NaN

 const arr = [false, 0, -0, "", null, undefined, NaN];

 arr.forEach(element => {
    if(element) {
        console.log(`${element} is truthy`)
    } else {
        console.log(`${element} is falsy`)
    }
 });

 const arr2 = [1, -1, "hello", {}, [], () => {}]
 arr2.forEach(element => {
    if(element) {
        console.log(`${element} is truthy`)
    } else {
        console.log(`${element} is falsy`)
    }
 });

