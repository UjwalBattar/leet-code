# Given a tree, rearrange the tree in in-order so that the leftmost
# node in the tree is now the root of the tree, and every node has no
# left child and only 1 right child.
#
# Example 1:
# Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
#
#        5
#       / \
#     3    6
#    / \    \
#   2   4    8
#  /        / \
# 1        7   9
#
# Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
#
#  1
#   \
#    2
#     \
#      3
#       \
#        4
#         \
#          5
#           \
#            6
#             \
#              7
#               \
#                8
#                 \
#                  9
# Note:
#
# The number of nodes in the given tree will be between 1 and 100.
# Each node will have a unique integer value from 0 to 1000.
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end
# @param {TreeNode} root
# @return {TreeNode}

ARR = []

def increasing_bst(root)
  in_order(root)
  res = TreeNode.new(nil)
  temp = res
  ARR.each_with_index do |n, i|
    temp.val = n
    if i < ARR.length - 1
      temp.right = TreeNode.new(nil)
      temp = temp.right
    end
  end
  ARR.pop until ARR.length == 0 #Because ARR is global constant
  res
end

def in_order(node)
  return if !node
  in_order(node.left)
  ARR.push(node.val)
  in_order(node.right)
end

# def increasing_bst(root)
#     increasing_bst_h(root)
# end
#
# def increasing_bst_h(node, root_node = nil)
#     return if node.nil?
#     right_n = increasing_bst_h(node.right, root_node) if node.right
#     n_node = TreeNode.new(node.val)
#     n_node.right = right_n || root_node
#     if node.left
#         n_node = increasing_bst_h(node.left, n_node)
#     end
#     n_node
# end
