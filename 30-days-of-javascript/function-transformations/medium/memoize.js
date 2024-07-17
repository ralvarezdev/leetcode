/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = new Map();

    return function (...args) {
        let result;

        if (args.length === 2) {
            if (map.has(args[0]))
                result = map.get(args[0]).get(args[1]);
            else {
                map.set(args[0], new Map());
                result = undefined;
            }

            if (result === undefined) {
                result = fn(...args);
                map.get(args[0]).set(args[1], result);
            }
            return result;
        }

        result = map.get(args[0]);

        if (result === undefined) {
            result = fn(args[0]);
            map.set(args[0], result);
        }
        return result;
    };
}

/**
 * let callCount = -1;
 * const memoizedFn = memoize(function (a, b) {
 *     callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */