/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let maxWaterBottles = numBottles;

    while ((numBottles -= numExchange) >= 0) {
        maxWaterBottles++
        numBottles++
    }

    return maxWaterBottles
};