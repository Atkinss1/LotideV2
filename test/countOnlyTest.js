const expect = require('chai').expect;
const countOnly = require('../countOnly');

const firstNames = [
  "Joe",
  "Jordan",
  "Jill",
  "Oliver"
];

const namesToCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
}

describe.only('#countOnly', () => {
  it('should return "undefined" if there are no matches in the object to count', () => {
    expect(countOnly(firstNames, namesToCount)).to.equal(null);
  });
});