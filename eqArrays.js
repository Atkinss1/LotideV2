/**
 * Takes in two Arrays and compares a perfect match
 * @param {Array} arr1 
 * @param {Array} arr2
 * @returns Boolean
 */
const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;