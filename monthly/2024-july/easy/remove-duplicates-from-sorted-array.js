/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=0, prevNum=null

    for(const num of nums)
        if(num!==prevNum||prevNum===null){
            prevNum=num
            nums[k++]=num
        }

    return k
};