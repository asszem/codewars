function isPrime(num) {
  let result = false;

  console.log(`${num} isPrime = ${result}`);

  for (let i=3;i<num;i+=3){
	if (num%i===0) return false;
  }
  return true;
}

// 3-9 - 15 - true, 5 is a divider
// 6-14 - false, no divider
function isDivider(from, til, target){
	for (from;from<til;from+=2){
		if (target%from===0) return true;
	}
	return false;
}

// 3 - 5 - 7 - (9) - 11 - 13 -15       | 15 
// from 7 result - 11
// from 5, result - 7
// from 11, result 15
function nextTest(from, num){
	let nextNum=num+2;
	while (true) {

	}
}

console.log(isDivider(5,9, 15))
console.log( isDivider(6,14,15))
// isPrime(9);
// isPrime(11);