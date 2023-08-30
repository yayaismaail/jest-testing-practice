const reverseString = require('./reverseString.js');

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});