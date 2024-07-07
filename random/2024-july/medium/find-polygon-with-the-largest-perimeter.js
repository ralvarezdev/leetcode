/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let longestSize, perimeter

    nums.sort((a,b)=>a-b)

    while(nums.length>=3){
        longestSide = nums.pop()
        perimeter = nums.reduce((accum, value)=>accum+value)

        if(perimeter>longestSide)
            return perimeter+longestSide
    }
    return -1
};