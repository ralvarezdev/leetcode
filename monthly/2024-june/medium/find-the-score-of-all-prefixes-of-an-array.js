/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
    const arr = new Array(nums.length)
    let counter = 0
    let maxNum = 0
    let accum = 0

    for (let num of nums) {
        if (num > maxNum)
            maxNum = num

        arr[counter++] = accum = maxNum + num + accum
    }

    return arr
};