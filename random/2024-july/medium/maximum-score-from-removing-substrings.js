/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    const [maxPoints, altPoints] = x > y ? [x, y] : [y, x]
    const [max, alt] = maxPoints === x ? ['ab', 'ba'] : ['ba', 'ab']
    let counter = 0

    const stringList = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'a' && s[i] !== 'b')
            continue

        let j = 1
        while (j < s.length && (s[j + i] === 'a' || s[j + i] === 'b'))
            j++

        const innerStringList = new Array(j)
        for (let k = 0; k < j; k++)
            innerStringList[k] = s[i + k]
        i += j

        if (innerStringList.length > 1)
            stringList.push(innerStringList)
    }

    const removeSubstring = (list, i, n) => list.splice(i, n)
    const findSubstring = (list, substring, points) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i] !== substring[0])
                continue

            for (let j = 1; j < substring.length; j++)
                if (list[j + i] !== substring[j])
                    break

                else if (j + 1 === substring.length) {
                    removeSubstring(list, i, substring.length)
                    counter += points

                    if (i > 0 && list[i - 1] === substring[0]) {
                        i--
                        j = 0
                    } else if (list[i] === substring[0])
                        i--
                }
        }
    }

    for (let innerStringList of stringList) {
        findSubstring(innerStringList, max, maxPoints)
        findSubstring(innerStringList, alt, altPoints)
    }

    return counter
};  