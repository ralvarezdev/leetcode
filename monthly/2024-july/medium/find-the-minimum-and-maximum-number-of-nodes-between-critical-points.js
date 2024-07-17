/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let prevVal = head.val, currVal = null, nextVal = null

    const criticalPos = []
    const criticalDiff = new Array(2)
    counter = 1

    const checkVal = () => {
        if ((currVal > nextVal && currVal > prevVal) || (currVal < nextVal && currVal < prevVal))
            criticalPos.push(counter)
    }

    while ((head = head.next) !== null) {
        counter++

        if (currVal !== null && nextVal !== null) {
            prevVal = currVal
            currVal = nextVal
            nextVal = head.val

            checkVal()
        } else if (currVal === null)
            currVal = head.val

        else {
            nextVal = head.val
            checkVal()
        }
    }

    if (criticalPos.length < 2)
        return [-1, -1]

    criticalDiff[1] = criticalPos[criticalPos.length - 1] - criticalPos[0]

    let min = null
    for (let i = 0, val; i < criticalPos.length - 1; i++) {
        val = criticalPos[i + 1] - criticalPos[i]

        if (val < min || min === null)
            min = val
    }
    criticalDiff[0] = min

    return criticalDiff
};