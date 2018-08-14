# Given an array nums of n integers and an integer target,
# find three integers in nums such that the sum is closest to target.
# Return the sum of the three integers. You may assume that each
# input would have exactly one solution.

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}

def three_sum_closest(nums, target)
  return nums.reduce(:+) if nums.length <= 3

  nums.sort!
  curr = 0
  sum = Float::INFINITY

  while curr < nums.length - 2
    left = curr + 1
    right = nums.length - 1

    while left < right
      temp = nums[curr] + nums[left] + nums[right]
      return temp if temp == target
      result = target - temp
      sum = temp if result.abs < (target - sum).abs

      if temp > target
        right -= 1
      else
        left += 1
      end
      
    end

    curr += 1
  end
  sum
end
