/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArray = function (nums) {
    const mid = parseInt(nums.length / 2)

    if (nums.length % 2 === 0)
        return (nums[mid - 1] + nums[mid]) / 2
    return nums[mid]
}

var findMedianSortedArrays = function (nums1, nums2) {
    const searchInsert = (val) => {
        let low = 0, high = nums1.length - 1, mid, isUpper

        while (high >= low) {
            mid = Math.floor((high + low) / 2)

            if (nums1[mid] === val)
                return mid

            else if (nums1[mid] > val) {
                high = mid - 1
                isUpper = false
            } else {
                low = mid + 1
                isUpper = true
            }
        }

        return isUpper ? mid + 1 : mid
    }

    if (nums1.length === 0)
        return findMedianSortedArray(nums2)

    for (let num of nums2)
        nums1.splice(searchInsert(num), 0, num)

    return findMedianSortedArray(nums1)
};