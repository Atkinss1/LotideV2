/**
 * Iterates through an array, if an index is an Array it will spread that array and concatenate it to the results
 * @param {Array} arr 
 * @returns new Array
 */
const flatten = function (arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

module.exports = flatten;