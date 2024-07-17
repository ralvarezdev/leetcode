/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let pivotNode = head.next, accum = pivotNode.val, currNode = pivotNode

    while ((currNode = currNode.next) !== null) {
        if (currNode.val !== 0)
            accum += currNode.val
        else {
            pivotNode.val = accum
            pivotNode.next = currNode.next
            pivotNode = pivotNode.next
            accum = 0
        }
    }

    return head.next
};