const expect = require('chai').expect;
const middle = require('../middle');

describe('#middle', () => {
  it('returns "null" if parameter is not an Array.', () => {
    expect(middle(1, 2, 3)).to.equal(null);
  });

  it('returns empty Array if Array length is < 3', () => {
    expect(middle([1, 2])).to.eql([]);
  });

  it('returns Array with a single element if the Array length is odd.', () => {
    expect(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).to.eql([6]);
  });
  
  it('returns Array with two elements if the Array length is even.', () => {
    expect(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.eql([5, 6]);
  });

  it('returns Array with two elements if the Array has mixed data Types if the Array length is even', () => {
    expect(middle([1, 2, 3, 'Lighthouse', 5, 6, 'Labs', 'Larry'])).to.eql(['Lighthouse', 5]);
  });

});