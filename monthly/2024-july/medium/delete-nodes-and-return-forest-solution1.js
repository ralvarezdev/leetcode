/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    const roots = [], LEFT = 0, RIGHT = 1

    const find = (arr, val) => {
        let low = 0, high = arr.length - 1, mid

        while (high >= low) {
            mid = Math.floor((high + low) / 2)

            if (arr[mid] === val)
                return mid

            else if (arr[mid] > val)
                high = mid - 1

            else
                low = mid + 1
        }

        return null
    }

    const merge = (left, right) => {
        const arr = []

        while (left.length && right.length)
            if (left[0] < right[0])
                arr.push(left.shift())
            else
                arr.push(right.shift())

        return [...arr, ...left, ...right]
    }

    const mergeSort = arr => {
        if (arr.length < 2)
            return arr

        const half = arr.length / 2

        const left = arr.splice(0, half)
        return merge(mergeSort(left), mergeSort(arr))
    }
    to_delete = mergeSort(to_delete)

    const getRoot = (parentNode, isRoot) => {
        let isRootDeleted = false

        const idx = find(to_delete, parentNode.val)
        if (idx !== null) {
            to_delete.splice(idx, 1)
            isRootDeleted = true
        } else if (isRoot)
            roots.push(parentNode)

        if (!isRootDeleted)
            for (const side of [LEFT, RIGHT]) {
                const node = side === LEFT ? parentNode.left : parentNode.right
                if (node === null)
                    continue

                if (getRoot(node, false)) {
                    if (side === LEFT)
                        parentNode.left = null

                    else
                        parentNode.right = null
                }
            }

        if (parentNode.left !== null)
            getRoot(parentNode.left, isRootDeleted)

        if (parentNode.right !== null)
            getRoot(parentNode.right, isRootDeleted)

        return isRootDeleted
    }
    getRoot(root, true)

    return roots
};