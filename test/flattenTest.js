const expect = require('chai').expect;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns "null" if parameter is not an Array', () => {
    expect(flatten('1, 2, 3')).to.equal(null);
  });

  it('returns Array if parameter does not include a nested Array', () => {
    expect(flatten([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
  });

  it('returns Array if parameter does include a nested Array', () => {
    expect(flatten([1, 2, [3, 4], 5])).to.eql([1, 2, 3, 4, 5]);
  });

  it('returns Array if parameter includes deeply nested Arrays', () => {
    expect(flatten([1, [2, 3, 4], [5, [6, 7, [8, 9], 10, 11]]])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});