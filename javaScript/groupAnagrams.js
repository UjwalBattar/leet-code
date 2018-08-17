// Given an array of strings, group anagrams together.
//
// Example:
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:
//
// All inputs will be in lowercase.
// The order of your output does not matter.

// Used method in this post for solution
// https://stackoverflow.com/questions/18781106/generate-same-unique-hash-code-for-all-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
 97, 101];

const charToInteger = c => c.charCodeAt(0) - 97;
const charToPrime = c => primes[charToInteger(c)];

var groupAnagrams = function(strs) {
  const stringHash = str => {
    let hash = 1;
    for (let i = 0; i < str.length; i++) {
      hash *= charToPrime(str[i]);
    }
    return hash;
  };

  const anagramMap = {};
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let hashed = stringHash(curr);
    if (anagramMap[hashed]) {
      anagramMap[hashed].push(curr);
    } else {
      anagramMap[hashed] = [curr];
    }
  }

  return Object.values(anagramMap);
};
