/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    obj = {}

    arr.forEach(element => obj[fn(element)] = element)
    arr = Object.keys(obj)
    arr.forEach((element, i) => arr[i] = parseInt(element))
    arr.sort((a, b) => fn(a) - fn(b))
    arr.forEach((key, i) => arr[i] = obj[key])

    return arr
};