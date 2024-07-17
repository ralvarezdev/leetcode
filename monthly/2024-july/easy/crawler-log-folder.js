/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    const moveToFolder = i => {
        const path = logs[i].substring(0, logs[i].length - 1)

        return path[0] === '.' ? "" : path
    }
    const moveToParentFolder = () => {
        const lastIdx = currDirectory.lastIndexOf('/')

        if (lastIdx >= 0)
            currDirectory = currDirectory.substring(0, lastIdx)
        else
            currDirectory = ""
    }

    let currDirectory = moveToFolder(0)

    for (let idx = 1; idx < logs.length; idx++) {
        if (logs[idx].charAt(0) !== '.') {
            if (currDirectory.length !== 0)
                currDirectory = [currDirectory, moveToFolder(idx)].join('/')
            else
                currDirectory = moveToFolder(idx)
            continue
        }

        if (logs[idx].charAt(1) !== '.')
            continue

        moveToParentFolder()
    }

    console.log(currDirectory)
    let counter = currDirectory.length > 0 ? 1 : 0

    for (let c of currDirectory)
        if (c === '/')
            counter++

    return counter
};