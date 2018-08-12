# Implement next permutation, which rearranges numbers into the
# lexicographically next greater permutation of numbers.
#
# If such arrangement is not possible, it must rearrange it as the
# lowest possible order (ie, sorted in ascending order).
#
# The replacement must be in-place and use only constant extra memory.
#
# Here are some examples. Inputs are in the left-hand column and its
# corresponding outputs are in the right-hand column.
#
# 1,2,3 → 1,3,2
# 3,2,1 → 1,2,3
# 1,1,5 → 1,5,1

# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.

def next_permutation(nums)
  return if nums.length <= 1
  el_idx = nil;
  end_idx = nums.length - 1
  i = nums.length - 1
  while i > 0
    if nums[i] > nums[i - 1]
      el_idx = i - 1
      break
    end
    i -= 1
  end

  i = nums.length - 1

  if el_idx
    while i > el_idx
      if nums[i] > nums[el_idx]
        nums[i], nums[el_idx] = nums[el_idx], nums[i]
        swap(nums, el_idx + 1, end_idx)
        break
      end
      i -= 1
    end
  else
    swap(nums, 0, end_idx)
  end
end

def swap(nums, start, fin)
  while start < fin
    nums[start], nums[fin] = nums[fin], nums[start]
    start += 1
    fin -= 1
  end
  nums
end
