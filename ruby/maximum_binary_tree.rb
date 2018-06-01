# Given an integer array with no duplicates.
# A maximum tree building on this array is defined as follow:
#
#  1. The root is the maximum number in the array.
#  2. The left subtree is the maximum tree constructed from
#     left part subarray divided by the maximum number.
#  3. The right subtree is the maximum tree constructed from
#     right part subarray divided by the maximum number.
#
# Construct the maximum tree by the given array and
#   output the root node of this tree.
#   Input: [3,2,1,6,0,5]
# Output: return the tree root node representing the following tree:
#
#       6
#     /   \
#    3     5
#     \    /
#      2  0
#        \
#         1
# Note:
# The size of the given array will be in the range [1,1000].

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {Integer[]} nums
# @return {TreeNode}
def construct_maximum_binary_tree(nums)
  return nil if nums.empty?

  max_idx = find_max(nums)
  root = TreeNode.new(nums[max_idx])

  left_nums = nums[0...max_idx]
  right_nums = nums[max_idx + 1..-1]

  root.left = construct_maximum_binary_tree(left_nums)
  root.right = construct_maximum_binary_tree(right_nums)

  root
end

def find_max(nums)
  max_val = 0
  max_idx = 0
  nums.length.times do |idx|
    if nums[idx] > max_val
      max_val = nums[idx]
      max_idx = idx
    end
  end
  max_idx
end
