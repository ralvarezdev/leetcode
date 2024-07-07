/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low=0,high= nums.length-1,mid, isUpper

    while(high>=low)
    {
        mid= Math.floor((high+low)/2)

        if(nums[mid]===target)
            return mid

        else if(nums[mid]>target){
            high=mid-1
            isUpper=false
        }

        else{
           low=mid+1
           isUpper=true
        }
    }

    return isUpper?mid+1:mid
};