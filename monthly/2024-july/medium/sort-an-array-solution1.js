/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const sortedNums=[nums.pop()]

    const binarySearchInsert=num=>{
            let low=0,high=sortedNums.length-1, mid,isUpper=false

            while(high>=low){
                mid = Math.floor((high+low)/2)

                if(sortedNums[mid]===num)
                    return mid

                else if(sortedNums[mid]>num)
                {
                    high=mid-1
                    isUpper=false
                }

                else{
                    low=mid+1
                    isUpper=true
                }
            }

            return isUpper?mid+1:mid
    }

    let num, idx

    while(nums.length>0){
        num = nums.pop()
        idx=binarySearchInsert(num)
        sortedNums.splice(idx,0,num)
    }
    return sortedNums
};