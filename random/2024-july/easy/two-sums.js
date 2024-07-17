/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()

    nums.forEach((num, i) => {
        const val = map.get(num)

        if (val === undefined)
            map.set(num, [i])
        else {
            val.push(i)
            map.set(num, val)
        }
    })

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        const idxs = map.get(diff)

        if (idxs === undefined)
            continue

        if (diff === nums[i]) {
            if (idxs.length < 2)
                continue
            return idxs.slice(0, 2)
        }

        return [i, idxs[0]]
    }
};