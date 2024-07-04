/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums=nums
    this.total=nums.length===0?0: nums.reduce((accum, value)=>accum+=value)
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.total
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "[" +this.nums + "]"
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */