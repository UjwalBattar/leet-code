// Given a set of candidate numbers (candidates) (without duplicates)
// and a target number (target), find all unique combinations in
// candidates where the candidate numbers sums to target.
//
// The same repeated number may be chosen from candidates unlimited
// number of times.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:
//
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a,b) => a - b);
  let res = [];

  function combinationFinder(currArr, tgt, idx) {
    if (tgt === 0) {
      res.push(currArr.slice());
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      if (tgt >= candidates[i]) {
        let newTgt = tgt - candidates[i];
        currArr.push(candidates[i]);
        combinationFinder(currArr, newTgt, i);
        currArr.pop();
      } else {
        return;
      }
    }
  }

  combinationFinder([], target, 0);
  return res;
};
