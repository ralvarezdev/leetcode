/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    const getMultiplier = (multiplier, j) => {
        let i = j, t, tempMultiplier = 1
        for (; j < formula.length; j++) {
            t = parseInt(formula[j])
            if (!Number.isInteger(t))
                break

            if (j > i) {
                tempMultiplier *= 10
                tempMultiplier += t
            } else
                tempMultiplier = t
        }

        return [multiplier * tempMultiplier, j - i - 1]
    }

    const count = (formula, multiplier, i) => {
        const elements = new Map()

        for (let j, e, innerElements, counter, hasDigits; i < formula.length; i++) {

            if (formula[i] === ')')
                break

            if (formula[i] === '(') {
                [innerElements, i] = count(formula, multiplier, i + 1)

                const [currMultiplier, diff] = getMultiplier(multiplier, ++i)
                i += diff
                //console.log(elements,innerElements,currMultiplier,i)

                for (let key of innerElements.keys()) {
                    counter = elements.get(key)
                    if (!counter)
                        counter = 0

                    elements.set(key, counter + innerElements.get(key) * currMultiplier)
                }

                //console.log(elements)
                continue
            }

            hasDigits = false
            for (j = i + 1; j < formula.length; j++) {
                if (formula[j] !== formula[j].toLowerCase())
                    break

                if (formula[j] === '(' || formula[j] === ')')
                    break

                if (!isNaN(parseInt(formula[j]))) {
                    hasDigits = true
                    break
                }
            }

            e = j < formula.length ? formula.substring(i, j) : formula.substring(i)
            i = j - 1

            counter = elements.get(e)
            if (!counter)
                counter = 0

            if (!hasDigits)
                counter++

            else {
                const [currCounter, diff] = getMultiplier(multiplier, ++i)
                counter += currCounter
                i += diff
            }

            elements.set(e, counter)
        }
        return [elements, i]
    }

    const [elements,] = count(formula, 1, 0)
    const sortedElements = []
    for (let key of elements.keys())
        if (elements.get(key) > 1)
            sortedElements.push([key, elements.get(key)])
        else
            sortedElements.push([key])

    sortedElements.sort((e1, e2) => e1[0].localeCompare(e2[0]))

    return sortedElements.flat().join('')
};
