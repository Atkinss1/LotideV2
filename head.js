/**
 * Takes in an Array and returns the first index
 * @param {Array} arr 
 * @returns Element[0]
 */
const head = function (arr) {
  if (!Array.isArray(arr)) {
    return console.log(`${arr} is not an Array.`);
  }

  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

module.exports = head;