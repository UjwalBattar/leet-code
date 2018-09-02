// You're given strings J representing the types of stones that are
// jewels, and S representing the stones you have.  Each character in
// S is a type of stone you have.  You want to know how many of the
// stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters in J
// and S are letters. Letters are case sensitive, so "a" is considered
// a different type of stone from "A".
//
// Example 1:
//
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:
//
// Input: J = "z", S = "ZZ"
// Output: 0
// Note:
//
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if (!J.length || !S.length) return 0;

  const jewels = {};

  for (let j = 0; j < J.length; j++) {
    if (!jewels[J[j].charCodeAt(0)]) jewels[J[j].charCodeAt(0)] = J[j];
  }

  let count = 0;

  for (let s = 0; s < S.length; s++) {
    if (jewels[S[s].charCodeAt(0)]) count++;
  }
  return count;
};

numJewelsInStones("aA", "aAAbbaAbb");
