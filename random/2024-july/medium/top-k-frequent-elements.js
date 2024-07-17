/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const frequencies = new Map()
    let f

    for (let i = 0; i < nums.length; i++) {
        f = frequencies.get(nums[i])
        frequencies.set(nums[i], !f ? 1 : f + 1)
    }
    const frequenciesNums = Array.from(frequencies.keys())

    const merge = (left, right) => {
        const arr = []

        while (left.length && right.length)
            if (frequencies.get(left[0]) > frequencies.get(right[0]))
                arr.push(left.shift())
            else
                arr.push(right.shift())

        return [...arr, ...left, ...right]
    }

    const mergeSort = arr => {
        if (arr.length < 2)
            return arr

        const half = arr.length / 2

        const left = arr.splice(0, half)
        return merge(mergeSort(left), mergeSort(arr))
    }

    return mergeSort(frequenciesNums).splice(0, k)
};