/**
 * Returns a new array excluding items to remove
 * @param {Array} source 
 * @param {Array} itemsToRemove 
 */
const without = function (source, itemsToRemove) {
  if (!Array.isArray(source) && !Array.isArray(itemsToRemove)) {
    return null;
  }
  const result = source.filter( item => {
    if (!isNaN(item)) {
      return !itemsToRemove.includes(item);  
    }
    const lowerCaseItem = item.toLowerCase();
    return !itemsToRemove.some(removeItem => removeItem.toLowerCase() === lowerCaseItem);
  });
  return result;
};

module.exports = without;