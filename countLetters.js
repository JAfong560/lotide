const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
};

const countLetters = function(string) {
  //console.log(string) //Print string to count
  const result = {};
  for (let letter of string) {
    //console.log(letter) //Print letter
    if (letter !== " ") { // Filters the spaces in the string
      if (result[letter]) { // If the letter has already been counted, adds 1 to the count
        result[letter] += 1;
      } else { // If the letter doesn't exist in the result object, creates it
        result[letter] = 1;
      }
    }
  }
  return result;
};

//Test code
let test = countLetters("LHasfgoihageL");
console.log(test);
assertEqual(test.L, 2);