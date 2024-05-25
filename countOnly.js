const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const namesToCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
}


const countOnly = function (allItems, itemsToCount) {
  if (!Array.isArray(allItems)) {
    return console.error(`${allItems} is not an Array.`);
  }

  const results = {};

  return results;
};

console.log(countOnly(firstNames, namesToCount));

module.exports = countOnly;