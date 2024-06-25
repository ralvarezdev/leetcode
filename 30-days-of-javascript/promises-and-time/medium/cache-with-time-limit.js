var TimeLimitedCache = function () {

};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.map === undefined) {
        this.map = new Map();
        this.accessible = new Map()
    }

    const exists = this.map.has(key)
    this.map.set(key, value)
    this.accessible.set(key, true)

    setTimeout(() => {
        if (this.map.get(key) === value)
            this.accessible.set(key, false)
    }, duration)

    return exists
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.map === undefined)
        return -1

    const accessible = this.accessible.get(key)

    if (!accessible)
        return -1

    return this.map.get(key)
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0

    if (this.map === undefined)
        return count

    for (const accessible of this.accessible.values())
        if (accessible)
            count++

    return count
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */