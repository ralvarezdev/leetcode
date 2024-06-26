/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj={}

    let fnValue;

    for(let element of this)
    {
        fnValue = fn(element)
        if(obj[fnValue]===undefined)
            obj[fnValue]=[]

        obj[fnValue].push(element)
    }

    return obj
};