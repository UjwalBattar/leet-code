# Given an integer array nums, find the contiguous subarray
# (containing at least one number) which has the largest sum and
# return its sum.
#
# Example:
#
# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:
#
# If you have figured out the O(n) solution, try coding another
# solution using the divide and conquer approach, which is more subtle.
# @param {Integer[]} nums
# @return {Integer}

def max_sub_array(nums)
  prev = nums[0]
  curr = nums[0]
  (1...nums.length).each do |i|
    curr = [curr + nums[i], nums[i]].max
    prev = [prev, curr].max
  end
  prev
end

# max_sub_array([-2,1,-3,4,-1,2,1,-5,4])
