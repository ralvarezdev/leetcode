/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    if (arr[start] === 0)
        return true

    const visitedNodes = new Array(arr.length)
    visitedNodes.fill(false)

    const currNodes = [start]
    visitedNodes[start] = true

    const getNextNode1 = (arr, i) => {
        const result = i + arr[i]
        return result >= arr.length ? null : result
    }
    const getNextNode2 = (arr, i) => {
        const result = i - arr[i]
        return result < 0 ? null : result
    }

    let currNodesLength, currNode, path1, path2
    while (currNodes.length > 0) {
        currNodesLength = currNodes.length

        while (--currNodesLength >= 0) {
            currNode = currNodes.shift()
            path1 = getNextNode1(arr, currNode)
            path2 = getNextNode2(arr, currNode)

            for (const path of [path1, path2])
                if (path !== null && !visitedNodes[path]) {
                    visitedNodes[path] = true
                    if (arr[path] === 0)
                        return true

                    currNodes.push(path)
                }
        }
    }
    return false
};