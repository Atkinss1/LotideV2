/**
 * 
 * @param {Array} arr 
 * @returns Array
 */
const tail = function (arr) {
  const result = arr.slice(1).map((element) => {
    return element
  });
  return result
};

module.exports = tail;