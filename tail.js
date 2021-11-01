// FUNCTION IMPLEMENTATION
const tail = (array) => {
  if (!array) {
    console.log("Error: tail arguement is undefined.");
  } else {
    //console.log("return tail")
    return array.slice(1);
  }
};

// EXPORT FUNCTION
module.exports = tail;