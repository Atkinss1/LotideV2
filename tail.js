/**
 * Takes in an Array and returns a new array starting at index[1]
 * @param {Array} arr 
 * @returns new Array
 */
const tail = function (arr) {
  if (Array.isArray(arr)) {
    const result = arr.slice(1).map((element) => {
      return element
    });
    return result;
  }
  return null;
};

module.exports = tail;