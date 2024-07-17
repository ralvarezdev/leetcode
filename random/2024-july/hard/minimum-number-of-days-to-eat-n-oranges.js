/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
    if (n <= 0)
        return 0

    const minDays = new Map()

    const getMinDays = (n) => {
        const nDays = []

        if (n <= 2)
            return n

        let min = minDays.get(n)
        if (min !== undefined)
            return min

        const minDays2 = 1 + n % 2 + getMinDays(parseInt(n / 2))
        const minDays3 = 1 + n % 3 + getMinDays(parseInt(n / 3))

        min = minDays2 < minDays3 ? minDays2 : minDays3
        minDays.set(n, min)

        return min
    }

    return getMinDays(n)
};