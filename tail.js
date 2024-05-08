/**
 * 
 * @param {Array} arr 
 * @returns Array
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