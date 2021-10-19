# Is Number a Prime
URL:
[Is Number a Prime?](https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript)

>Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

>Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

>Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

## Notes
- If it can be divided by 2, it is not a prime
- Looping all the way up to n will be slow 
- If a number can not be divided by 3, then it can not be divided by the multiplies of 3 (6, 9, 15) so these numbers should not be considered in testing
- Looping upwards should not be incremental, numbers that were already tested should be skipped
- 9x3=27 81=27*3
- A number can be divided by a multiple of a prime (13*3 = 39)
- 169 is divisible by a prime only (13)
- check only whether the n is divisible by the primes up to n


## Test
- 
