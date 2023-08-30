const capitalize = require('./capitalize.js');

test('capitalize text', () => {
  expect(capitalize('hello')).toBe('Hello');
})

test('throws an error for anything other than a string', () => {
  expect(() => { capitalize(1) }).toThrow();
});

test('throws an error for anything other than a string', () => {
    expect(() => { capitalize(3%3) }).toThrow();
  });