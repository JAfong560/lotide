// TEST/ASSERTION FUNCTIONS
const eqArrays = function (array1, array2) {
    let output = true;
    if (array1.length !== array2.length) return false;
    for (let element = 0; element < array1.length; element += 1) {
        if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
            output = output && eqArrays(array1[element], array2[element]);
        } else if (array1[element] !== array2[element]) {
            output = output && false;
        }
    }
    //console.log(output);
    return output;
};

const assertArraysEqual = function (array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    } else {
        console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    }
};

// ACTUAL FUNCTION
const middle = function (array) {
    if (array.length <= 2) {
        return [];
    } else if (array.length % 2 === 0) {
        return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
    } else {
        return [array[Math.floor(array.length / 2)]];
    }
};

// TEST CODE
// ...
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])// => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])// => [3, 4]
