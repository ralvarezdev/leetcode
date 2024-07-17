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

    const pathToStart = [], pathToDest = []
    let result

    const getPath = (node, path, findValue) => {
        if (node.val === findValue)
            return true

        for (const side of [LEFT, RIGHT]) {
            if (side === LEFT) {
                if (!node.left)
                    continue

                result = getPath(node.left, path, findValue)
            } else if (!node.right)
                continue

            else
                result = getPath(node.right, path, findValue)

            if (result) {
                path.push(side)
                return result
            }
        }

        return false
    }

    getPath(root, pathToStart, startValue)
    getPath(root, pathToDest, destValue)

    while (pathToStart.length > 0 && pathToDest.length > 0) {
        if (pathToStart[pathToStart.length - 1] !== pathToDest[pathToDest.length - 1])
            break

        pathToStart.pop()
        pathToDest.pop()
    }

    //console.log(pathToStart,pathToDest)
    pathToDest.reverse()

    return UP.repeat(pathToStart.length) + pathToDest.join('')
};