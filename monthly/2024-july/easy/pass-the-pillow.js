/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let person, t = 0

    while (t < time) {
        let i = 1

        for (; i < n && t < time; i++, t++)
            person = i

        if (t === time) {
            person = i
            break
        }

        for (i = n - 1; i > 0 && t < time; i--, t++)
            person = i
    }
    return person
};