# Given a collection of candidate numbers (candidates) and a target
# number (target), find all unique combinations in candidates where
# the candidate numbers sums to target.

# Each number in candidates may only be used once in the combination.

# Note:

# All numbers (including target) will be positive integers.
# The solution set must not contain duplicate combinations.
# Example 1:

# Input: candidates = [10,1,2,7,6,1,5], target = 8,
# A solution set is:
# [
#   [1, 7],
#   [1, 2, 5],
#   [2, 6],
#   [1, 1, 6]
# ]
# Example 2:

# Input: candidates = [2,5,2,1,2], target = 5,
# A solution set is:
# [
#   [1,2,2],
#   [5]
# ]
# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}

def dfs(candidates, target, start, curr, currSum, visited, result)
    return if currSum > target
    
    if currSum == target
        result.push(curr)
        return
    end
    i = start
    while i < candidates.length
        next if start > 0 && candidates[i] == candidates[i - 1] && visited[i - 1] == false
        visited[i] = true
        dfs(candidates, target, i + 1, curr.concat([candidates[i]]), currSum + candidates[i], visited, result);
        visited[i] = false
        i += 1
    end
    return result
end

def combination_sum2(candidates, target)
    candidates.sort!
    visited = Array.new(candidates.length, false)
    result = []
    dfs(candidates, target, 0, [], 0, visited, result)
    return result
end

combination_sum2([2, 5, 2, 1, 2], 5)