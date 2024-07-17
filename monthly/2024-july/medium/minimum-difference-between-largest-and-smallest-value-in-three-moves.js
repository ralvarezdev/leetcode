/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    const movs = 3

    if (nums.length <= movs)
        return 0

    nums.sort((a, b) => b - a)

    const movsList = new Array(movs * 2)
    for (let i = movs; i > 0; i--) {
        movsList.push(nums[movs - i] - nums[nums.length - 1 - i])
        movsList.push(nums[i] - nums[nums.length - 1 - movs + i])
    }
    movsList.sort((a, b) => a - b)

    return movsList[0]
};