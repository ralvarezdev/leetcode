/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let accum = init;
    nums.forEach((element, _) => {
        accum = fn(accum, element);
    });
    return accum;
};