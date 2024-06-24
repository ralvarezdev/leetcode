/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val)
{
    const expectObject = {};

    expectObject.toBe = function (valToBe)
    {
        if (valToBe !== val)
            throw new Error("Not Equal");
        return true;
    };

    expectObject.notToBe = function notToBe (valNotToBe)
    {
        if (valNotToBe === val)
            throw new Error("Equal");
        return true;
    };
    return expectObject;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */