# Given an unsorted integer array, find the smallest missing
# ositive integer.
#
# Example 1:
#
# Input: [1,2,0]
# Output: 3
# Example 2:
#
# Input: [3,4,-1,1]
# Output: 2
# Example 3:
#
# Input: [7,8,9,11,12]
# Output: 1
# Note:
#
# Your algorithm should run in O(n) time and uses constant
# extra space.
# @param {Integer[]} nums
# @return {Integer}

# def first_missing_positive(nums)
#   return 1 if nums.empty?
#   i = 0
#   while i < nums.length
#     if nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]
#       a = nums[i]
#       b = nums[nums[i] - 1]
#       nums[nums[i] - 1], nums[i] = a, b
#       p nums
#     else
#       i += 1
#     end
#   end
#   i = 0
#   while i < nums.length
#     return i + 1 if nums[i] != i + 1
#   end
#   i + 1
# end

def first_missing_positive(nums)
  arr = []
  nums.each do |n|
    arr[n - 1] = n if n > 0
  end

  i = 0
  while i < arr.length
    if arr[i] != i + 1
      return i + 1
    end
    i += 1
  end
  return i
end
