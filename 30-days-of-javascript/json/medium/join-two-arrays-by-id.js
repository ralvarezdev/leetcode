/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    arr1.sort((a, b) => a.id - b.id)
    arr2.sort((a, b) => a.id - b.id)

    const arr3 = new Array()
    let i = 0

    const insert = (value) => arr3.push(value)

    for (let obj of arr1) {
        while (i < arr2.length && obj.id > arr2[i].id)
            insert(arr2[i++])

        if (i < arr2.length && obj.id === arr2[i].id) {
            for (let key in arr2[i])
                obj[key] = arr2[i][key]
            i++
        }
        insert(obj)
    }

    while (i < arr2.length)
        insert(arr2[i++])

    return arr3
};