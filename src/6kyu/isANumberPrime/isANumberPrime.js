const isANumberPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  testFromTop = num - 2;
  testFromBottom = 3;
  testFromMiddleUp = (num + 1) / 2;
  testFromMiddleDown = (num + 1) / 2;
  while (
    testFromTop > 1 &&
    testFromBottom < num &&
    testFromMiddleDown >= testFromBottom &&
    testFromMiddleUp <= testFromTop
  ) {
    if (
      num % testFromTop === 0 ||
      num % testFromBottom === 0 ||
      num % testFromMiddleUp === 0 ||
      num % testFromMiddleDown === 0
    ) {
      return false;
    }
    testFromTop -= 2;
    testFromBottom += 2;
    testFromMiddleUp += 2;
    testFromMiddleDown -= 2;
  }
  return true;
};

module.exports = {
  isANumberPrime,
};
