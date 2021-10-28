const {breakCamelCase} = require('../../src/6kyu/breakCamelCase/breakCamelCase');

describe('Testing for break camel case', () => {
  test('should return same string when no camecase', () => {
    expect(breakCamelCase('almakortedio')).toBe('almakortedio');
  });
  test('should return empty when no string enteredj', () => {
    expect(breakCamelCase('')).toBe('');
  });
  test('should return correct split', () => {
    expect(breakCamelCase('almaKorteDio')).toBe('alma Korte Dio');
  });
  test('should return every letter uppercase', () => {
    expect(breakCamelCase('ALMAKORTEDIO')).toBe(' A L M A K O R T E D I O');
  });
});
