# Given a sorted linked list, delete all duplicates such that 
# each element appear only once.

# Example 1:

# Input: 1->1->2
# Output: 1->2
# Example 2:

# Input: 1->1->2->3->3
# Output: 1->2->3

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
def delete_duplicates(head)
    curr = head
    while !curr.nil? && !curr.next.nil?
        temp = curr.next
        while curr.val == temp.val
            temp = temp.next
        end
        curr.next = temp
        curr = temp
    end
    head
end