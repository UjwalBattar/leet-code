# Given a linked list, swap every two adjacent nodes and
# return its head.
#
# Example:
#
# Given 1->2->3->4, you should return the list as 2->1->4->3.
# Note:
#
# 1. Your algorithm should use only constant extra space.
# 2. You may not modify the values in the list's nodes, only nodes
#     itself may be changed

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}

def swap_pairs(head)
  return head if (!head || !head.next)

  n1 = head.next
  n2 = head.next.next

  n1.next = head

  head.next = swap_pairs(n2)

  n1
end
