/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null)
        return list2

    if (list2 === null)
        return list1

    let head = null, list3

    if (list2.val >= list1.val) {
        head = list3 = list1
        list1 = list1.next
    } else {
        head = list3 = list2
        list2 = list2.next
    }

    while (list2 !== null) {
        while (list1 !== null && list2.val >= list1.val) {
            list3 = list3.next = list1
            list1 = list1.next
        }

        list3 = list3.next = list2
        list2 = list2.next
    }
    list3.next = list1

    return head
};