/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const map = new Map()
    let climb1, climb2

    const climb = n => {
        if (n <= 2)
            return n

        climb1 = map.get(n - 1)
        if (climb1 === undefined) {
            climb1 = climb(n - 1)
            map.set(n - 1, climb1)
        }

        climb2 = map.get(n - 2)
        if (climb2 === undefined) {
            climb2 = climb(n - 2)
            map.set(n - 2, climb2)
        }

        return climb1 + climb2
    }

    return climb(n)
};