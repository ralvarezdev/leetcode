/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const isNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)
    dividend = dividend > 0 ? dividend : -dividend
    divisor = divisor > 0 ? divisor : -divisor

    if (divisor > dividend)
        return 0

    const min = -Math.pow(2, 31)
    const max = -1 - min

    const getResult = (val) => {
        if (isNegative)
            return val < min ? min : -val
        return val > max ? max : val
    }

    if (divisor === 1)
        return getResult(dividend)

    const multiples = []
    let r = 0, pow, exponent = 1, multiple = divisor, remainder = dividend, tempRemainder

    while (multiple <= dividend) {
        multiples.push(multiple)
        multiple = Math.pow(divisor, ++exponent)
    }

    while (multiples.length > 0 && remainder > 0) {
        multiple = multiples.pop()
        tempRemainder = remainder
        pow = Math.pow(divisor, multiples.length)

        while ((tempRemainder -= multiple) >= 0) {
            r += pow
            remainder = tempRemainder
        }
    }

    return getResult(r)
};