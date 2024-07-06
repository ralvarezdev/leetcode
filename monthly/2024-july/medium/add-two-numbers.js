/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1===null)
        return l2
    if(l2===null)
        return l1

    const head=l1
    let prev, accum=0, val=0;

    while(l1!==null){
        if(l2!==null){
            val=l1.val+l2.val+accum
            l2=l2.next
        }
        else
            val=l1.val+accum

        l1.val=val%10
        accum=(val-val%10)/10
        prev=l1
        l1=l1.next
    }

    if(l2!==null)
        prev.next=l2

    while(l2!==null&&accum>0){
        val = l2.val+accum
        l2.val=val%10
        accum=(val-val%10)/10
        prev=l2
        l2=l2.next
    }
    if(accum>0){
        prev.next=new ListNode()
        prev.next.val=accum
    }

    return head
};