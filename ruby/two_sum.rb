# Given an array of integers, return indices of the two numbers such that
# they add up to a specific target.
# You may assume that each input would have exactly one solution,
# and you may not use the same element twice.
#
# Example:
# Given nums = [2, 7, 11, 15], target = 9,
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].
=begin
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
=end

def two_sum(nums, target)
  compliments = {}
  i = 0
  while i < nums.length
    val = nums[i]
    if compliments[val]
      return [compliments[val], i]
    else
      compliments[target - val] = i
    end
    i += 1
  end
  "No sum exists"
end
