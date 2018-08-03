# Given n non-negative integers representing an elevation map
# where the width of each bar is 1, compute how much water
# it is able to trap after raining.
#
# The above elevation map is represented by array
# [0,1,0,2,1,0,1,3,2,1,2,1].
# In this case, 6 units of rain water (blue section) are being
# trapped.
#
# Example:
# Input: [0,1,0,2,1,0,1,3,2,1,2,1]
# Output: 6
# @param {Integer[]} height
# @return {Integer}

def trap(height)
  vol = 0
  left = 0
  right = height.length - 1
  l_max = 0
  r_max = 0

  while left < right
    if height[left] < height[right]
      height[left] >= l_max ? l_max = height[left] : vol += height[left]
      left += 1
    else
      height[right] >= r_max ? r_max = height[right] : vol += height[right]
      right -= 1
    end
  end

  vol
end
