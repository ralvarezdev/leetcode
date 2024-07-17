/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArray = new Array(arr.length);
    arr.forEach((element, i) => newArray[i] = fn(element, i));
    return newArray;
};