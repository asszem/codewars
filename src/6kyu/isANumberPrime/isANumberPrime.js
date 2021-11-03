const isANumberPrime = (num) => {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  let testPrime = 3;
  let knownPrimes = [3];
  while (testPrime < num) {
    // console.log('testPrime = ', testPrime);
    if (num % testPrime === 0) {
      //number is not a prime
      return false;
    }
    // check the next prime
    testPrime = nextPrime(testPrime, knownPrimes);
    knownPrimes.push(testPrime);
  }
  console.log('knwon primes = ', knownPrimes)
  return true;
};

const nextPrime = (num, knownPrimes) => {
  let nextCandidate = num + 2;
  while (!isCandidatePrime(nextCandidate, knownPrimes)) {
    nextCandidate += 2;
  }
  return nextCandidate;
};

const isCandidatePrime = (candidate, knownPrimes) => {
  for (const element of knownPrimes) {
    if (candidate % element === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  isANumberPrime,
};
