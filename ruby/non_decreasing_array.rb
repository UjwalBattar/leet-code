# Given an array with n integers, your task is to check if it could
# become non-decreasing by modifying at most 1 element.
#
# We define an array is non-decreasing if array[i] <= array[i + 1]
# holds for every i (1 <= i < n).
#
# Example 1:
# Input: [4,2,3]
# Output: True
# Explanation: You could modify the first 4 to 1 to get a
# non-decreasing array.
# Example 2:
# Input: [4,2,1]
# Output: False
# Explanation: You can't get a non-decreasing array by modify at most
# one element. Note: The n belongs to [1, 10,000].
# @param {Integer[]} nums
# @return {Boolean}

def check_possibility(nums)
  return true if nums.length < 3;

  m = -1
  i = 0
  while i < nums.length - 1
    if nums[i] > nums[i + 1]
      if m != -1
        return false
      else
        m = i
      end
    end
    i += 1
  end

  return (
    m == -1 ||
    m == 0 ||
    m == nums.length - 2 ||
     nums[m - 1] <= nums[m + 1] ||
     nums[m] <= nums[m + 2]
   )
end
