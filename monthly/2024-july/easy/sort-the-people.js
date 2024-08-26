/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const searchInsert = (nums, target)=> {
    let low = 0, high = nums.length - 1, mid, isUpper

    while (high >= low) {
        mid = Math.floor((high + low) / 2)

        if (nums[mid] === target)
            return mid

        else if (nums[mid] < target) {
            high = mid - 1
            isUpper = false
        } else {
            low = mid + 1
            isUpper = true
        }
    }

    return isUpper ? mid + 1 : mid
}

    const sortedHeights=[], sortedNames=[]
    let i, h, n

    while(names.length>0&&heights.length>0)
    {
        h = heights.pop()
        n= names.pop()
        i=searchInsert(sortedHeights, h)
        sortedHeights.splice(i, 0, h)
        sortedNames.splice(i,0,n)
    }

    return sortedNames
};