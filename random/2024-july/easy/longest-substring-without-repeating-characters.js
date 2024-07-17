/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0, map, counter

    for (let i = 0; i < s.length && max < s.length - i; i++) {
        map = new Map()
        counter = 0

        for (let j = i; j < s.length; j++)
            if (map.get(s[j]) !== undefined)
                break
            else {
                map.set(s[j], true)
                counter++
            }

        if (counter > max)
            max = counter
    }

    return max
};