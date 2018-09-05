# Let's call an array A a mountain if the following properties hold:
#
# A.length >= 3
# There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ...
# A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
# Given an array that is definitely a mountain, return any i such that
# A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
#
# Example 1:
#
# Input: [0,1,0]
# Output: 1
# Example 2:
#
# Input: [0,2,1,0]
# Output: 1
# Note:
#
# 3 <= A.length <= 10000
# 0 <= A[i] <= 10^6
# A is a mountain, as defined above.
# @param {Integer[]} a
# @return {Integer}

def peak_index_in_mountain_array(a)
  return nil if a.length < 3

  low = 0
  hi = a.length - 1

  while low < hi
    mid = low + (hi - low) / 2
    if a[mid] < a[mid + 1]
      low = mid + 1
    else
      hi = mid
    end
  end

  low
end
