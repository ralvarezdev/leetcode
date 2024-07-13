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
 * @return {number}
 */
var longestZigZag = function(root) {
    const nodesList=[]
    const nodePos=0,directionPos=1,lengthPos=2 , left=0, right=1
    let node, nextNode,direction,nextDirection, nodesListLength, length, maxLength=0

    nextNode = root.left
    if(nextNode!==null)
        nodesList.push([nextNode, right, 1])

    nextNode = root.right
    if(nextNode!==null)
        nodesList.push([nextNode, left,1])

    if(nodesList.length===0)
        return 0
    maxLength+=1

    const getNextNode=(node,next)=> next===right?node.right:node.left
    const getNextDirection=d=>d===left?right:left

    while((nodeListLength=nodesList.length)>0)
        while(--nodeListLength>=0){
            nodeList = nodesList.pop()

            node = nodeList[nodePos]
            direction=nodeList[directionPos]
            nextDirection=getNextDirection(direction)
            length=nodeList[lengthPos]

            // Continue with current path, if possible
            nextNode =getNextNode(node, direction)
            if(nextNode!==null)
                nodesList.push([nextNode, nextDirection,length+1])

            else if(length>maxLength)
                maxLength=length

            // Add alternative path, if possible
            nextNode=getNextNode(node, nextDirection)
            if(nextNode!==null)
                nodesList.push([nextNode,direction,1])
        }
    return maxLength
};