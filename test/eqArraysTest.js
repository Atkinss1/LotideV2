const expect = require('chai').expect;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns "false" if both arrays do not match.', () => {
    expect(eqArrays([1, 2, 3], [2, 3, 1])).false;
  });

  it ('returns "true" if both arrays match.', () => {
    expect(eqArrays([1, 3, 5], [1, 3, 5])).true;
  });

  it ('returns "false" if one array is larger than the other.', () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3, 4])).false;
  });

  it ('returns "false" if any parameter is not an Array.', () => {
    expect(eqArrays('1', [1, 3, 4])).false;
  });
});