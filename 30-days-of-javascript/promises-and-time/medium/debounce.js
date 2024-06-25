/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let called = false
    let timer

    return function (...args) {
        if (called)
            clearTimeout(timer)

        timer = setTimeout(() => {
            fn(...args)
            called = false
        }, t)
        called = true
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */