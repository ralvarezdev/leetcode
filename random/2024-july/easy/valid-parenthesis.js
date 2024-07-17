/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const characters = []

    for (let c of s)
        if (c === '(')
            characters.push(c)
        else if (c === '[')
            characters.push(c)
        else if (c === '{')
            characters.push(c)
        else if (c === ')') {
            if (characters.pop() !== '(')
                return false
        } else if (c === ']') {
            if (characters.pop() !== '[')
                return false
        } else if (c === '}') {
            if (characters.pop() !== '{')
                return false
        }

    return characters.length === 0
};