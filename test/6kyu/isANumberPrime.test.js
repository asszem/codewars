const { isANumberPrime } = require('../../src/6kyu/isANumberPrime/isANumberPrime');

describe('Testing whethe a number is prime...', () => {
  test('when not a prime is given, it should return false', () => {
    expect(isANumberPrime(4)).toBe(false);
  });
  test('when a prime is given, it should return true', () => {
    expect(isANumberPrime(13)).toBe(true);
  });
  test('when a huge number is given, it should not take too long', () => {
    expect(isANumberPrime(1111111111111111)).toBe(false);
  });
});
