// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log("🛑🛑🛑 Assertion Passed: " + actual + " === " + expected) : console.log("✅✅✅ Assertion Passed: " + actual + " !== " + expected);
  return;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);