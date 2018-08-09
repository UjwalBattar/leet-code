# Given n pairs of parentheses, write a function to
# generate all combinations of well-formed parentheses.
#
# For example, given n = 3, a solution set is:
#
# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]
# @param {Integer} n
# @return {String[]}

def generate_parenthesis(n)
  res = []
  add_parenthesis(res, n, "")
  res
end

def add_parenthesis(arr, n, curr)
  if curr == ""
    # if it's the first
    add_parenthesis(arr, n, "(")
  elsif curr.count("(") == n && curr.count(")") == n
    # if it's fully done
    arr << curr
  elsif curr.count("(") == curr.count(")")
    # if we have the same number of opening / closing parenthesis
    add_parenthesis(arr, n, curr + "(")
  elsif curr.count("(") > curr.count(")")
    # if we can add any, opening or closing parenthesis
    add_parenthesis(arr, n, curr + "(") if curr.count("(") < n
    add_parenthesis(arr, n, curr + ")")
  end
end
