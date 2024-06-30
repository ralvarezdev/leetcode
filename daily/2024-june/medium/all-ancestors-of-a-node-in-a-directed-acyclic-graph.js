/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const arr = new Array(n)
    const traverse=new Array(n)

    for(let i=0;i<n;i++)
    {
        arr[i]=[]
        traverse[i]=false
    }

    const getPos=(arr, value)=>{
        let low=0
        let high=arr.length-1
        let isUpper

        if(high<0)
            return 0

        while(high>=low)
        {
            mid = low + Math.floor((high - low) / 2);

            if (arr[mid] === value)
                return -1;

            isUpper = arr[mid] < value

            if(isUpper)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return (isUpper)?mid+1:mid;
    }

    const sortedInsertion = (arr, value)=>{
        const pos = getPos(arr,value)

        if(pos>=0)
            return arr.toSpliced(pos,0,value)

        return arr
    }

    for(let [fromNode, toNode] of edges)
        arr[toNode]=sortedInsertion(arr[toNode], fromNode)

    const getAncestor=(arr, toNode)=>{
        if(!traverse[toNode]){
            for(let fromNode of arr[toNode]) {
                if(!traverse[fromNode])
                    getAncestor(arr, fromNode)

                for(let fromFromNode of arr[fromNode])
                    arr[toNode]=sortedInsertion(arr[toNode], fromFromNode)
            }

            traverse[toNode]=true
        }
    }

    for(let i=0;i<n;i++)
        getAncestor(arr, i)

    return arr
};