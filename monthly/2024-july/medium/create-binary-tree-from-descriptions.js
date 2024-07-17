/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    const nodesParent = new Map()
    const nodes = new Map(), parentPos = 0, childPos = 1, isLeft = 2
    let parentNode, childNode

    const getNode = value => {
        let node = nodes.get(value)

        if (node === undefined) {
            node = new TreeNode(value, null, null)
            nodes.set(value, node)
        }

        return node
    }

    for (let desc of descriptions) {
        parentNode = getNode(desc[parentPos])
        childNode = getNode(desc[childPos])

        if (desc[isLeft])
            parentNode.left = childNode
        else
            parentNode.right = childNode

        nodesParent.set(childNode, parentNode)
        if (!nodesParent.has(parentNode))
            nodesParent.set(parentNode, null)
    }

    for (let key of nodesParent.keys())
        if (!nodesParent.get(key))
            return key
};