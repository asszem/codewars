function maxDistance(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.length - i > i ? arr.length - i - 1 : i);
  }
  return result;
}

function thrills(arr) {
  let distances = maxDistance(arr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // let thrill = arr[i]*2>arr[i]+distances[i]?arr[i]*2:arr[i]+distances[i];
    let thrill = arr[i] + distances[i];
    result.push(thrill);
  }
  return result;
}
function doubleArray(arr) {
  let result = arr.map((x) => x * 2);
  return result;
}
function maxThrills(arr) {
  let maxDouble = 0;
  let transfer = 0;
  let max1 = arr[0];
  let max2 = arr[1];
  let endTransfer=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * 2 > maxDouble) {
      maxDouble = arr[i] * 2;
    }
    transfer = arr.length - i > i ? arr.length - i - 1 : i;
    console.log(transfer);
    if (arr[i] + transfer >= max1) {
      max2 = max1;
      max1 = arr[i];
	  endTransfer=transfer;
    }
    if (arr[i] + transfer >= max2 && arr[i] + transfer < max1) {
      max2 = arr[i] + transfer;
    }
  }
  console.log('maxDouble = ', maxDouble, 'max1 = ', max1, ' max2 = ', max2);
  return max1 + max2  > maxDouble ? max1 + max2 : maxDouble;
}
// let evenArray = [1, 2, 3, 4, 5, 6];
let evenArray = [3,1,3];
let dArray = doubleArray(evenArray);
let oddArray = [1, 2, 3, 4, 5];

console.log('Initial array\t= ', evenArray);
console.log('Max distance	= ', maxDistance(evenArray)); // 5, 4, 3, 3, 4, 5 	length = 6, half = 3  // i-n vs n-i
console.log('Dist Thrills 	= ', thrills(evenArray));
console.log('Double ar      = ', dArray);
console.log('Max thrills = ', maxThrills(evenArray));

// console.log('Initial array =', oddArray);
// console.log('Max distance = ', maxDistance(oddArray)); // 4, 3, 2, 3, 4		length = 5, half = 2
// console.log('Thrills = ', thrills(oddArray));
// console.log('Max thrills = ', maxThrills(oddArray));

// position 1, max length 5 (array length-1), invers position
// distance from End vs. Distance from Start
// distance from End = Length - Position
// distance from Start = Start + position
// arr[0], arr[1], arr[2]...arr[n]
// arr[0] max distance from end n-1
// arr[1] max distance from end n-2
// arr[n] max distance from end n-n
// arr[n] max distance from start n-1
// arr[0] max distance from start 0
