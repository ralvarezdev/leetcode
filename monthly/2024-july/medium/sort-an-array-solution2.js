/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
   const merge = (leftArr,rightArr)=>{
        const arr=[]

        while(leftArr.length>0&&rightArr.length>0)
            if(leftArr[0]>=rightArr[0])
                arr.push(rightArr.shift())
            else
                arr.push(leftArr.shift())

        return [...arr,...leftArr,...rightArr]
   }

   const mergeSort=arr=>{
        if(arr.length===1)
            return arr

        const half=Math.floor(arr.length/2)
        const leftArr=arr.splice(half)

        return merge(mergeSort(leftArr),mergeSort(arr))
   }

   return mergeSort(nums)
};