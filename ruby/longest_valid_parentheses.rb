# Given a string containing just the characters '(' and ')',
# find the length of the longest valid (well-formed) parentheses
# substring.
#
# Example 1:
#
# Input: "(()"
# Output: 2
# Explanation: The longest valid parentheses substring is "()"
# Example 2:
#
# Input: ")()())"
# Output: 4
# Explanation: The longest valid parentheses substring is "()()"

# @param {String} s
# @return {Integer}
def longest_valid_parentheses(s)
  count = 0
  paren = []
  i = 0
  while i < s.length
    if paren[-1] == s[i]
      paren.pop
    else
      if s[i] == "("
        paren.push(")")
      else
        paren.push("(")
      end
    end
    i += 1
  end
  s.length - paren.length
end
