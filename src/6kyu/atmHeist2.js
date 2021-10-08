const maximumThrill = (arr) => {
  if (arr.length <= 1) return 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {



    for (let k = arr.length - 1; k > 1; k--) {
      let temp = arr[i] + k + arr[k];
      console.log('i = ',i,' k = ',k,' temp = ', temp);
      if (temp > arr[i] * 2 && temp > result) {
        result = temp;
      } else if (arr[i] * 2 > result) {
        result = arr[i] * 2;
      }
    }
    if (arr[i] * 2 > result) {
      result = arr[i] * 2;
    }
  }
  return result;
};

// console.log(maximumThrill([3, 1, 3])); // 8	
console.log(maximumThrill([3, 1, 6])); //12
