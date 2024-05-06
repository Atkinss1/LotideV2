const assertEqual = require('./assertEqual');

const head = function (arr) {
  if (!Array.isArray(arr)) {
    return console.log(`${arr} is not an Array.`);
  }

  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'hello');
assertEqual(head('hello'), 'hello');