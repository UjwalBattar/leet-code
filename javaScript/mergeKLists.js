// Merge k sorted linked lists and return it as one sorted list.
// Analyze and describe its complexity.
//
// Example:
//
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let amount = lists.length;
  let interval = 1;

  while (interval < amount) {
    for (let i = 0; i < (amount - interval); i += (interval * 2)) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  if (amount > 0) {
    return lists[0];
  } else {
    return lists;
  }

};

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
