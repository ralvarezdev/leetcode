/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let pos = Math.pow(2, n - 1), tempPos = 0

    const distincts = 3 * pos, result = new Array(n)
    if (k > distincts)
        return ""

    if (k <= pos) {
        result[0] = 'a'
        tempPos = 0
    } else if (k <= 2 * pos) {
        result[0] = 'b'
        tempPos = pos
    } else {
        result[0] = 'c'
        tempPos = 2 * pos
    }

    pos /= 2
    k -= tempPos

    for (let i = 1, tempPos = 0; i < n; i++) {
        if (k <= pos)
            //a->b
            //b->a
            //c->a
            result[i] = result[i - 1] === 'a' ? 'b' : 'a'

        else {
            //a->c
            //b->c
            //c->b
            result[i] = result[i - 1] === 'c' ? 'b' : 'c'
            k -= pos
        }

        pos /= 2
    }

    return result.join('')
};