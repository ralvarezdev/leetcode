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
    to_delete = new Set(to_delete)

    const getRoot = (parentNode, isRoot) => {
        let isRootDeleted = false

        if (to_delete.has(parentNode.val))
            isRootDeleted = true

        else if (isRoot)
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