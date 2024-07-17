/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    if (n % 2 !== 0)
        return false

    const calcBaseNumber = (num, base) => {
        const baseUnits = new Array()

        let baseUnit = 1, division, diff
        let result = []

        while ((division = num / baseUnit) >= 1) {
            baseUnits.push(baseUnit)
            baseUnit *= base
        }

        while (baseUnits.length > 0) {
            baseUnit = baseUnits.pop()
            diff = num % baseUnit
            division = parseInt(num / baseUnit)

            result.push(division)
            num = diff
        }

        return result
    }

    for (let i = 2, conv; i <= n - 2; i++) {
        conv = calcBaseNumber(n, i)

        for (let j = conv.length, k = 0; k < j; j--, k++)
            if (conv[i] !== conv[j])
                return false
    }
    return true
};