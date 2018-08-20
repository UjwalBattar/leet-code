# Given a sorted array and a target value, return the index if the
# target is found. If not, return the index where it would be if
# it were inserted in order.
#
# You may assume no duplicates in the array.
#
# Example 1:
#
# Input: [1,3,5,6], 5
# Output: 2
# Example 2:
#
# Input: [1,3,5,6], 2
# Output: 1
# Example 3:
#
# Input: [1,3,5,6], 7
# Output: 4
# Example 4:
#
# Input: [1,3,5,6], 0
# Output: 0
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}

def search_insert(nums, target)
  return 0 if nums.empty?
  min = 0
  max = nums.length - 1

  while min <= max
    mid = (min + max) / 2
    if nums[mid] == target
      return mid
    elsif target > nums[mid]
      min = mid + 1
    else
      max = mid - 1
    end
  end

  min
end
