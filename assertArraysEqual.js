// REQUIRE MODULES
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

// EXPORT FUNCTION
module.exports = assertArraysEqual;