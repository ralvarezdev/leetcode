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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    const RIGHT = "R", LEFT = "L", UP = "U"
    const parentNodes = new Map(), destAncestors = [], startAncestors = [], path = []

    let destNode = null, startNode = null, t1, t2, top

    const checkChildNode = childNode => {
        if (childNode.val === startValue)
            startNode = childNode

        else if (childNode.val === destValue)
            destNode = childNode

        else
            return false

        return true
    }

    const checkChildNodes = parentNode => {
        for (let childNode of [parentNode.left, parentNode.right])
            if (childNode !== null) {
                parentNodes.set(childNode.val, parentNode)
                let end = false

                if (!startNode || !destNode)
                    end = checkChildNode(childNode)

                if (!end)
                    checkChildNodes(childNode)
            }
    }

    parentNodes.set(root.val, null)
    checkChildNode(root)
    checkChildNodes(root)

    t1 = destNode
    while ((t1 = parentNodes.get(t1.val)) !== null)
        destAncestors.push(t1)

    t2 = startNode
    while ((t2 = parentNodes.get(t2.val)) !== null)
        startAncestors.push(t2)

    while (startAncestors.length > destAncestors.length)
        path.push(UP)

    while (destAncestors.length > 1 && startAncestors > 1 && destAncestors[1].val === startAncestors[1].val) {
        startAncestors.shift()
        destAncestors.shift()
    }

    //console.log(startAncestors,destAncestors)
    t1 = destAncestors.pop()

    for (let i = 0; i < startAncestors.length; i++)
        path.push(UP)

    while (destAncestors.length > 0) {
        top = destAncestors.pop()
        //console.log(top, t1, t2)

        if ((t2 = t1.left) === top)
            path.push(LEFT)
        else {
            t2 = t1.right
            path.push(RIGHT)
        }

        t1 = t2
    }

    if (!t1.right)
        path.push(LEFT)

    else if (!t1.left)
        path.push(RIGHT)

    else
        path.push(t1.right.val === destValue ? RIGHT : LEFT)

    return path.join('')
};