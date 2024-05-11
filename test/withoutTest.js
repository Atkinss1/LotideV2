const expect = require('chai').expect;
const without = require('../without');

describe('#without', () => {
  it('returns "null" if given no arrays', () => {
    expect(without(1, 1)).to.eql(null);
  });

  it('returns filtered results removing numbers in itemsToRemove', () => {
    expect(without([1, 2], [2])).to.eql([1]);
  });

  it('returns filtered results removing strings in itemsToRemove', () => {
    expect(without(['Lighthouse', 'Labs', 'Larry'], ['Lighthouse'])).to.eql(['Labs', 'Larry']);
  });

  it('returns filtered results that are case-sensitive', () => {
    expect(without(['Lighthouse', 'Labs', 'Larry'], ['larry'])).to.eql(['Lighthouse', 'Labs']);
  });
});