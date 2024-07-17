/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    if (n === 0)
        return []

    const arr = new Array(n)
    arr[0] = "1"

    for (let i = 1, divBy3, divBy5; i < n; i++) {
        divBy3 = (i + 1) % 3 === 0
        divBy5 = (i + 1) % 5 === 0

        if (divBy3 && divBy5)
            arr[i] = "FizzBuzz"
        else if (divBy3)
            arr[i] = "Fizz"
        else if (divBy5)
            arr[i] = "Buzz"
        else
            arr[i] = `${i + 1}`
    }

    return arr
};