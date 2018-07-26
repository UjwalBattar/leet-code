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
# def longest_valid_parentheses(s)
#   paren_stack = [-1]
#   max_len = 0
#   i = 0
#   while i < s.length
#     if s[i] == '('
#       paren_stack.push(i)
#     else
#       paren_stack.pop
#       if paren_stack.empty?
#         paren_stack.push(i)
#       else
#         max_len = [max_len, i - paren_stack[-1]]
#       end
#     end
#     i += 1
#   end
#   return max_len
# end

def longest_valid_parentheses(s)
  lefts = 0
  rights = 0
  max_len = 0

  i = 0
  while i < s.length
    if s[i] == '('
      lefts += 1
    else
      rights += 1
    end

    if lefts == rights
      max_len = [max_len, right * 2].max
    elsif rights >= lefts
      lefts = rights = 0
    end
    i += 1
  end

  lefts = right = 0
  i = s.length - 1
  while i >= 0
    if s[i] == '('
      lefts += 1
    else
      rights += 1
    end

    if lefts == rights
      max_len = [max_len, lefts * 2].max
    elsif lefts >= rights
      lefts = rights = 0
    end
    i -= 1
  end

  max_len
end
