function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i < num - 1; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function nextPrime(num) {
  let increment = 0;
  while (true) {
    if (isPrime(num + ++increment)) {
      return num + increment;
    }
  }
}

function getPrimeOf(num) {
  let testPrime = 2;
  while (testPrime <= num) {
    if (num % testPrime === 0) {
      return testPrime;
    }
    testPrime = nextPrime(testPrime);
  }
}

function getPrimesOf(num) {
  let result = [];
  let factor = num;
  let prime = getPrimeOf(factor);
  result.push(prime);
  while (result.reduce((a, b) => a * b) != num) {
    factor = factor / prime;
    prime = getPrimeOf(factor);
    result.push(prime);
  }
  return result;
}
console.log('getPrimesOf 30', getPrimesOf(3258));

function buildKPrimeArray(k, start, end) {
  let kArray = [];
  for (let i = start; i < end; i++) {
    if (getPrimesOf(i).length === k) {
      kArray.push(getPrimesOf(i).reduce((x,y)=>x*y));
    }
  }
  return kArray;
}
console.log('2 primes between 2 and 50 = ', buildKPrimeArray(2, 2, 50))

function stepCounter(step, array){
  let result = [];
  for (let i=0;i<array.length-1;i++){
    if (array[i+1]-array[i]===step){
      result.push([array[i], array[i+1]])
    }
  }
  return result;
}

// console.log('2 primes with 2 steps between 2 and 50', stepCounter(2, buildKPrimeArray(2,2,50)))
// 6, 8, 2627371, 2627581

stepCounter(6, buildKPrimeArray(8,2627371,2627581)).forEach(x =>
  {
    console.log(x)
  })
