// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
};

const head = (array) => {
  if (!array) {
    console.log("Error: a head arguement is undefined.");
  } else {
    //console.log("return head")
    return array[0];
  }
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), head());