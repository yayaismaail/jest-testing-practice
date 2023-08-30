const stringLength = require('./stringLength.js');

describe('stringLength', () => {
    test('returns the length of a string', () => {
        expect(stringLength('hello')).toBe(5);
      });

  test('throws an error for strings shorter than 1 character', () => {
    expect(() => { stringLength('') }).toThrow();
  });

  test('throws an error for strings longer than 10 characters', () => {
    expect(() => { stringLength('This is longer than 10 characters') }).toThrow();
  });
});