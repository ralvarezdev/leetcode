/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const newArr = [];
    arr.forEach((element, i) => {
        if (fn(element, i))
            newArr.push(element);
    });
    return newArr;
};