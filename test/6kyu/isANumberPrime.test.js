const { isANumberPrime } = require('../../src/6kyu/isANumberPrime/isANumberPrime');

describe('Testing whethe a number is prime...', () => {
  test('when not a prime is given, it should return false', () => {
    expect(isANumberPrime(4)).toBe(false);
  });
});
