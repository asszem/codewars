
# Sum of Pairs

[Kata url](https://www.codewars.com/kata/54d81488b981293527000c8f)

>Sum of Pairs
>Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
>Negative numbers and duplicate numbers can and will appear.
>NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.


## Test cases we should cover

### Pomodoro 1

- Setup environment ✅
- Iterating through 10m items could time out
- 
- Write test cases
- Test 1 - invalid input (if NOT first argument is an array with numbers and second argument is NOT a number)
- Test 2 - invalid input (if no two arguments are given)
- Test 3 - there are no pairs of values that can be added to produce 2 -> return undefined
			Example: sum_pairs([0, 0, -2, 3], 2)
- Test 4 - there is one

### Example final test

