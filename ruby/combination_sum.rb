# Given a set of candidate numbers (candidates) (without duplicates)
# and a target number (target), find all unique combinations in
# candidates where the candidate numbers sums to target.
#
# The same repeated number may be chosen from candidates unlimited
# number of times.
#
# Note:
#
# All numbers (including target) will be positive integers.
# The solution set must not contain duplicate combinations.
# Example 1:
#
# Input: candidates = [2,3,6,7], target = 7,
# A solution set is:
# [
#   [7],
#   [2,2,3]
# ]
# Example 2:
#
# Input: candidates = [2,3,5], target = 8,
# A solution set is:
# [
#   [2,2,2,2],
#   [2,3,3],
#   [3,5]
# ]
# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}

def combination_sum(candidates, target)
  candidates.sort!
  [].tap { |res| combination_finder(candidates, target, [], 0, res) }
end

def combination_finder(candidates, tgt, curr_arr, idx, results)
  return if tgt < 0

  if tgt == 0
    results << curr_arr.dup
  else
    (idx...candidates.length).each do |i|
      new_tgt = tgt - candidates[i]
      curr_arr.push(candidates[i])
      combination_finder(candidates, new_tgt, curr_arr, i, results)
      curr_arr.pop
    end
  end
end
