/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    const calcPos=i=>2*i+1

    const isOdd=n%2!==0
    const maxIdx=Math.floor(isOdd?n/2:n/2-1)
    let median,accum=0

    if(isOdd)
        median=calcPos(maxIdx)
    else
        median =(calcPos(maxIdx)+calcPos(Math.floor(maxIdx+1)))/2

    for(let i=0;i<=maxIdx;i++)
        accum+=median-calcPos(i)

    return accum
};