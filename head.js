// FUNCTION IMPLEMENTATION
const head = (array) => {
  if (!array) {
    console.log("Error: a head arguement is undefined.");
  } else {
    //console.log("return head")
    return array[0];
  }
};

// EXPORT FUNCTION
module.exports = head;