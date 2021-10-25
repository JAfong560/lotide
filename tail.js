// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  return actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (array) => {
  if (!array) {
    console.log("Error: tail arguement is undefined.");
  } else {
    //console.log("return tail")
    return array.slice(1);
  }
};

/* // TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! */

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!