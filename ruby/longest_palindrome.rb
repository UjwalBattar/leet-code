# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
#
# Example 1:
#
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:
#
# Input: "cbbd"
# Output: "bb"
#
#
# @param {String} s
# @return {String}
#
def longest_palindrome(s)
  start_idx = 0
  end_idx = 0
  i = 0
  while i < s.length
    len1 = expand_around_center(s, i, i)
    len2 = expand_around_center(s, i, i + 1)
    len = [len1, len2].max
    if len > (end_idx - start_idx)
      start_idx = i - (len - 1) / 2
      end_idx = i + len / 2
    end
    i += 1
  end
  s[start_idx..end_idx]
end

def expand_around_center(s, left, right)
  l_idx = left
  r_idx = right

  while l_idx >= 0 && r_idx < s.length && s[l_idx] == s[r_idx]
    l_idx -= 1
    r_idx += 1
  end

  return r_idx - l_idx - 1
end
