//Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.Make sure to do this using the rest and spread operator.

const findMin = (...minArgs) => Math.min(...minArgs);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {
        ...obj
    }
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {
        ...obj
    }
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
}

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}