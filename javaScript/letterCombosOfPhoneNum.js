// Given a string containing digits from 2-9 inclusive, return all
// possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons)
// is given below. Note that 1 does not map to any letters.
//
//
//
// Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
//
// Although the above answer is in lexicographical order, your answer
// could be in any order you want.

const conversion = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  if (digits.length === 1) return conversion[digits[0]];
  let last = digits.length - 1;
  let prev = letterCombinations(digits.slice(0, last));
  let next = [];
  for (let i = 0; i < conversion[digits[last]].length; i++) {
    next = next.concat(createPerms(prev, conversion[digits[last]][i]));
  }
  return next;
};

function createPerms(prevArr, el) {
  return prevArr.map((element) => element + el);
}

// letterCombinations("23");
