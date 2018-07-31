# There are two sorted arrays nums1 and nums2 of size
# m and n respectively.
#
# Find the median of the two sorted arrays.
# The overall run time complexity should be O(log (m+n)).
#
# You may assume nums1 and nums2 cannot be both empty.
#
# Example 1:
#
# nums1 = [1, 3]
# nums2 = [2]
#
# The median is 2.0
# Example 2:
#
# nums1 = [1, 2]
# nums2 = [3, 4]
#
# The median is (2 + 3)/2 = 2.5
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}

# can easily be don using .sort

def find_median_sorted_arrays(nums1, nums2)
  joined = []

  while nums1.length > 0 && nums2.length > 0
    if nums1[0] <= nums2[0]
      joined.push(nums1.shift)
    else
      joined.push(nums2.shift)
    end
  end

  joined += nums1 += nums2

  mid = (joined.length / 2)

  if joined.length % 2 == 0
    return (joined[mid] + joined[mid - 1]) / 2.0
  else
    return joined[mid]
  end
end
