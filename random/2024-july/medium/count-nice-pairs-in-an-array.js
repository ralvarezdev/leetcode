/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    let nList, mid

    const getReverse=n=>{
        if(n<=9)
            return n

        n=String(n)
        nList=new Array(n.length)

        for(let i=n.length-1, j=0;j<i;i--,j++){
            nList[i]=n[j]
            nList[j]=n[i]
        }

        if(n.length%2!==0){
            mid=parseInt(n.length/2)
            nList[mid]=n[mid]
        }

        return parseInt(nList.join(''))
    }

    const revNums=new Map(), revNumsFreq=new Map()
    let value,freq, counter=0

    nums.forEach((num, i)=>{
        value=revNums.get(num)

        if(value===undefined){
            value=num-getReverse(num)
            revNums.set(num, value)
        }

        freq=revNumsFreq.get(value)

        if(freq!==undefined)
            revNumsFreq.set(value,freq+1)
        else
            revNumsFreq.set(value,1)
    })

    const revNumsFreqValues=Array.from(revNumsFreq.values())
    for(let i=0;i<revNumsFreqValues.length;i++){
        value=revNumsFreqValues[i]-1
        counter+=value*(value+1)/2
    }

    return counter%(Math.pow(10,9)+7)
};