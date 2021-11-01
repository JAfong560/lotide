/* // test tail.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements! */

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns [Lighthouse, Labs] for [To Yo, Lighthouse, Labs]", () => {
        assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
});