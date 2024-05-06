const assertEqual = function (actual, expected) {
  if (typeof(actual) === 'string' && typeof(expected) === 'string') {
    const lowerCaseActual = actual.toLowerCase();
    const lowerCaseExpected = expected.toLowerCase();
    if (lowerCaseActual === lowerCaseExpected) {
      return console.log(`🟢🟢🟢 Assertion Passed: ${lowerCaseActual} === ${lowerCaseExpected}`);
    } else {
      return console.log(`🔴🔴🔴 Assertion Failed: ${lowerCaseActual} !== ${lowerCaseExpected}`);
    }
  }
  if (actual === expected) {
      return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

module.exports = assertEqual;