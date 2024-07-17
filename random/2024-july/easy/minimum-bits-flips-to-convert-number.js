/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
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

    const startBinary = calcBaseNumber(start, 2)
    const goalBinary = calcBaseNumber(goal, 2)

    while (goalBinary.length < startBinary.length)
        goalBinary.splice(0, 0, 0)

    while (startBinary.length < goalBinary.length)
        startBinary.splice(0, 0, 0)

    let counter = 0
    for (let i = 0; i < goalBinary.length; i++)
        if (goalBinary[i] !== startBinary[i])
            counter++

    return counter
};