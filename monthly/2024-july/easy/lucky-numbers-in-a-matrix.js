/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minMap = new Map(), maxMap = new Map()

    for(let i=0, j, min;i<matrix.length;i++){
        min = matrix[i][0]

        for(j=1;j<matrix[i].length;j++)
            if(matrix[i][j]<min)
                min=matrix[i][j]

        minMap.set(min, true)
    }

    for(let i=0,j,max;i<matrix[0].length;i++)
    {
        max =matrix[0][i]

        for(j=1;j<matrix.length;j++)
            if(matrix[j][i]>max)
                max=matrix[j][i]

        maxMap.set(max, true)
    }

    const result =[]

    for(let key of minMap.keys())
        if(minMap.get(key)&&maxMap.get(key))
            result.push(key)

    return result
};