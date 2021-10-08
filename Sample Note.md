[Markdown syntax](https://www.markdownguide.org/cheat-sheet/)

# Highest Scoring Word

[Kata url](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/python)

> Given a string of words, you need to find the highest scoring word.
> Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
> You need to return the highest scoring word **as a string**.
> If two words score the same, return the word that appears earliest in the original string.
> All letters will be lowercase and all inputs will be valid.

## Test cases we should cover

### Pomodoro 1

- If string is only one word, return with it. ✅
- We need an array of the string. 🕥
- Have to rank the words by score.
- Have to return the highest word.

### Example final test

'what time are we climbing up the volcano' have to return 'volcano'