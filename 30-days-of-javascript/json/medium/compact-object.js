/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (obj instanceof Array) {
        const newObj = new Array()
        let counter = 0;

        for (let element of obj) {
            let result = compactObject(element)

            if (result)
                newObj[counter++] = result
        }

        return newObj
    }

    if (obj instanceof Object) {
        const newObj = {}

        for (let key in obj) {
            let result = compactObject(obj[key])

            if (result)
                newObj[key] = result
        }

        return newObj
    }

    return obj
};