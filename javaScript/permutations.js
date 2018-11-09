// Given a collection of distinct integers, return all possible
// permutations.
//
// Example:
//
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
  if (nums.length <= 1) return [nums];

  const curr = nums.shift();
  let perms = permute(nums);
  let totalPerms = [];
  perms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      totalPerms.push(perm.slice(0, i).concat([curr], perm.slice(i, perms.length)));
      }
  });

  return totalPerms;
};

permute([1, 2, 3]);
