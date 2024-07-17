/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let i, j, c, minLength

    for (i = 0; i < strs.length; i++)
        if (strs[i].length < minLength || minLength === undefined)
            minLength = strs[i].length

    for (i = 0; i < minLength; i++) {
        c = strs[0][i]

        for (j = 1; j < strs.length; j++)
            if (c !== strs[j][i])
                return strs[0].substr(0, i)
    }
    return strs[0].substr(0, i)
};