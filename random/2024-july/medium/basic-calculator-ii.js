/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.replace(' ', '')
    let length = s.length, isPlusSign = false

    const getLastNumberIdx = () => {
        let idx

        for (let i = length - 1; i >= 0; i--)
            if (i === 0)
                idx = 0
            else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/') {
                idx = i + 1
                break
            }

        let n = s.substring(idx, length)
        length = idx
        return n
    }

    const numbers = [], operators = []
    let accum, n, prevOp = null, currOp = null

    const hasGreaterPrecedence = (prevOp, currOp) => {
        if (currOp === '/' || prevOp === null)
            return true

        return currOp !== '+'
    }

    const checkSign = (n) => {
        if (length === 0 || s[length - 1] !== '-')
            return n

        length--
        isPlusSign = true
        return -n
    }

    const peekCurrSign = () => isPlusSign ? '+' : s[length - 1]

    const getCurrSign = () => {
        const sign = peekCurrSign()

        if (!isPlusSign)
            length--
        else
            isPlusSign = false

        return sign
    }

    accum = getLastNumberIdx()
    if (accum === null)
        return null

    accum = checkSign(parseInt(accum))
    numbers.push(accum)

    while (length > 0) {
        prevOp = null

        while (length > 0 && hasGreaterPrecedence(prevOp, peekCurrSign())) {
            currOp = getCurrSign()
            operators.push(currOp)

            n = getLastNumberIdx()
            if (n === null)
                return null

            n = checkSign(parseInt(n))
            numbers.push(n)

            prevOp = currOp
        }

        accum = numbers.pop()

        while (operators.length > 0) {
            // Testing
            //console.log(`[${numbers}] [${operators}] [${accum}] [${s}]`)

            n = numbers.pop()
            currOp = operators.pop()

            if (currOp === '+')
                accum += n

            else if (currOp === '-')
                accum -= n
            else if (currOp === '*')
                accum *= n

            else if (currOp === '/')
                accum = Math.trunc(accum / n)
        }
        numbers.push(accum)
    }

    return accum
};