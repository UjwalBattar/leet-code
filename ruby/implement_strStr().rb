# Implement strStr().
#
# Return the index of the first occurrence of needle in haystack,
# or -1 if needle is not part of haystack.
#
# Example 1:
#
# Input: haystack = "hello", needle = "ll"
# Output: 2
# Example 2:
#
# Input: haystack = "aaaaa", needle = "bba"
# Output: -1
# Clarification:
#
# 1. What should we return when needle is an empty string? This is a
# great question to ask during an interview.
#
# 2. For the purpose of this problem, we will return 0 when needle is
# an empty string. This is consistent to C's strstr() and Java's
# indexOf().
# @param {String} haystack
# @param {String} needle
# @return {Integer}

def str_str(haystack, needle)
  return 0 if needle.empty?

  i = 0

  while i + needle.length <= haystack.length
    if haystack[i] == needle[0]
      if haystack[i, needle.length] == needle
        return i
      end
    end
    i += 1
  end
  -1
end
