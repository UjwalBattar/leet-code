# Suppose an array sorted in ascending order is rotated at some pivot
# unknown to you beforehand.
#
# (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
#
# You are given a target value to search. If found in the array return
# its index, otherwise return -1.
#
# You may assume no duplicate exists in the array.
#
# Your algorithm's runtime complexity must be in the order of O(log n).
#
# Example 1:
#
# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4
# Example 2:
#
# Input: nums = [4,5,6,7,0,1,2], target = 3
# Output: -1
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}

def search(nums, target)
  lo = 0
  hi = nums.length - 1
  while lo <= hi
    mid = lo + (hi - lo) / 2
    return mid if nums[mid] === target
    if nums[lo] <= nums[mid]
      if target >= nums[lo] && target < nums[mid]
        hi = mid - 1
      else
        lo = mid + 1
      end
    else
      if target > nums[mid] && target <= nums[hi]
        lo = mid + 1
      else
        hi = mid - 1
      end
    end
  end
  -1
end
