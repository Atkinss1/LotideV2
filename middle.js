/**
 * Given an Array, will return a new Array with middle elements
 * @param {Array} arr 
 * @returns Array with middle element(s)
 */
const middle = function (arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length < 3) {
    return [];
  }

  const results = [];
  
  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length / 2);
    results.push(arr[middleIndex]);
  } else {
    const minIndex = arr.length / 2 - 1;
    const maxIndex = arr.length / 2;
    results.push(arr[minIndex], arr[maxIndex]);
  }
  return results;
};

module.exports = middle;