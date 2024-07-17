/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    consecutiveOdds = 0

    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 !== 1)
            consecutiveOdds = 0

        else if (++consecutiveOdds === 3)
            return true

    return false
};