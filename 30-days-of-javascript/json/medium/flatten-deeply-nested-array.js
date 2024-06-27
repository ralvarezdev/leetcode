/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n<=0||!(arr instanceof Array))
        return arr

    const flatArr=new Array()

    for(const element of arr)
        if(element instanceof Array)
            flatArr.push(...flat(element, n-1))
        else
            flatArr.push(element)

    return flatArr
};