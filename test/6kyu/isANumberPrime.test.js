const { isANumberPrime } = require('../../src/6kyu/isANumberPrime/isANumberPrime');

describe('Testing if a number is prime...', () => {
  test(' 4 is not prime, it should return false', () => {
    expect(isANumberPrime(4)).toBe(false);
  });
  test('13 is prime, it should return true', () => {
    expect(isANumberPrime(13)).toBe(true);
  });
  test('169 is not prime, it should return false', () => {
    expect(isANumberPrime(169)).toBe(false);
  });
  // test('388112359 is prime', () => {
  //   expect(isANumberPrime(388112359)).toBe(true);
  // });
  // test('when a huge number is given, it should not take too long', () => {
  //   expect(isANumberPrime(1111111111111111)).toBe(false);
  // });
});
