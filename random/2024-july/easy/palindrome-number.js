/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0)
        return false
    if (x == 0)
        return true

    const numberStr = String(x)
    const numberStrLength = numberStr.length

    for (let i = 0; i < numberStrLength / 2; i++)
        if (numberStr[i] !== numberStr[numberStrLength - 1 - i])
            return false
    return true
};