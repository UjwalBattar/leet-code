# Given n non-negative integers a1, a2, ..., an, where each
# represents a point at coordinate (i, ai). n vertical lines are
# drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
# Find two lines, which together with x-axis forms a container,
# such that the container contains the most water.
#
# Note: You may not slant the container and n is at least 2.

# @param {Integer[]} height
# @return {Integer}

def max_area(height)
  max_area = 0
  h1_idx = 0
  h2_idx = height.length - 1

  while h1_idx < h2_idx
    curr_area = [height[h1_idx], height[h2_idx]].min * (h2_idx - h1_idx)
    # if curr_area > max_area
    #   max_area = curr_area
    # end
    max_area = [curr_area, max_area].max

    if height[h1_idx] < height[h2_idx]
      h1_idx += 1
    else
      h2_idx -= 1
    end
  end

  max_area
end
