const eqArrays = require('./eqArrays');

/**
 * Takes in two arrays and asserts they are a match
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
const assertArraysEqual = function (arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return console.log(`Please pass an array to the parameters.`);
  }
  if (!eqArrays(arr1, arr2)) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  return console.log(`🟢🟢🟢 Assertion Successful: ${arr1} === ${arr2}`);
};

module.exports = assertArraysEqual;

