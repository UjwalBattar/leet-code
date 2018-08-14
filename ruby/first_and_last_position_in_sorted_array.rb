# Given an array of integers nums sorted in ascending order,
# find the starting and ending position of a given target value.
#
# Your algorithm's runtime complexity must be in the order of O(log n).
#
# If the target is not found in the array, return [-1, -1].
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

def search_range(nums, target)
  left = find_index(nums, target, true)
  right = find_index(nums, target, false) - 1

  [
    nums[left] == target ? left : -1,
    nums[right] == target ? right : -1
  ]
end

def find_index(nums, tgt, left)
  low = 0
  hi = nums.length

  while low < hi
    mid = (low + hi) / 2
    if nums[mid] > tgt || (left && nums[mid] == tgt)
      hi = mid
    else
      low = mid + 1
    end
  end
  low
end
