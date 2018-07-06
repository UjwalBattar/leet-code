# Given an array nums of n integers, are there elements a, b, c in nums
# such that a + b + c = 0? Find all unique triplets in the array which
# gives the sum of zero.
#
# Note:
#
# The solution set must not contain duplicate triplets.
#
# Example:
#
# Given array nums = [-1, 0, 1, 2, -1, -4],
#
# A solution set is:
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]

# @param {Integer[]} nums
# @return {Integer[][]}

def three_sum(nums)
  res = []
  return res if nums.length < 3
  nums = nums.sort
  i = 0
  while i < nums.length - 3
    return res if nums[i] > 0
    if i == 0 || nums[i] > nums[i - 1]
      j = i + 1
      k = nums.length - 1
      while j < k
        if nums[i] + nums[j] + nums[k] == 0
          res << [nums[i], nums[j], nums[k]]
        end
        if nums[i] + nums[j] + nums[k] < 0
          current_start = j
          while nums[j] == nums[current_start] && j < k
            j += 1
          end
        else
          current_end = k
          while nums[k] == nums[current_end] && j < k
            k -= 1
          end
        end
      end
    end
    i += 1
  end
  res
end
