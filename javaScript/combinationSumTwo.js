// Given a collection of candidate numbers (candidates) and a target
// number (target), find all unique combinations in candidates where
// the candidate numbers sums to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:
//
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  let visited = Array.from(Array(candidates.length), () => false);
  res.concat(dfs(target, candidates, [], 0, 0, visited, res));
  console.log(res);

  return res;
};

function dfs(target, candidates, curr, currSum, start, visited, result) {
  if (currSum === target) {
    result.push(curr);
    return;
  }

  if (currSum > target) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > 0 && candidates[i] === candidates[i - 1] && !visited[i - 1]) {
      continue;
    }
    visited[i] = true;
    dfs(target, candidates, curr.concat(candidates[i]), currSum + candidates[i], i + 1, visited, result);
    visited[i] = false;
  }

  return result;
}

combinationSum2([2, 5, 2, 1, 2], 5);
// var combinationSum2 = function (candidates, target) {
//   candidates.sort((a, b) => (a - b));
//   let result = [];
//   visited = new Array(candidates.length).fill(false);

//   function dfs(current, currentSum, startIndex, visited) {
//     if (currentSum == target) {
//       result.push(current);
//       return;
//     }
//     if (currentSum > target) {
//       return;
//     }

//     for (let i = startIndex; i < candidates.length; i++) {
//       if (i > 0 && candidates[i] == candidates[i - 1] && !visited[i - 1]) {
//         continue;
//       }
//       visited[i] = true;
//       dfs(current.concat(candidates[i]), currentSum + candidates[i], i + 1, visited);
//       visited[i] = false;
//     }
//   }

//   dfs([], 0, 0, visited);
//   return result;
// };