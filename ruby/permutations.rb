# Given a collection of distinct integers, return all possible
# permutations.
#
# Example:
#
# Input: [1,2,3]
# Output:
# [
#   [1,2,3],
#   [1,3,2],
#   [2,1,3],
#   [2,3,1],
#   [3,1,2],
#   [3,2,1]
# ]
# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
  return [nums] if nums.length <= 1

  curr = nums.shift(1)
  perms = permute(nums)

  res = []

  perms.each do |perm|
    puts perm
    i = 0
    while i <= perm.length
      temp = perm[0, i]
      # .concat([curr]).concat(perm[i, perm.length])
      res.push(perm[0, i].concat([curr]).concat(perm[i, perm.length]))
      i += 1
    end
  end
  res
end

permute([1, 2, 3])
