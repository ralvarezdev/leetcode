/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const numsSorted = new Array(nums.length), numsMap=new Map(), frequencyMap=new Map()
    let frequencyList=[], numsList, frequency

    for(let num of nums){
        frequency = numsMap.get(num)

        if(frequency===undefined)
            numsMap.set(num, 1)
        else
            numsMap.set(num, frequency+1)
    }

    for(let num of numsMap.keys()){
        frequency=numsMap.get(num)
        numsList=frequencyMap.get(frequency)

        if(numsList===undefined){
            frequencyMap.set(frequency, [num])
            frequencyList.push(frequency)
        }
        else
            numsList.push(num)
    }

    frequencyList.sort((a,b)=>a-b)

    for(let i=0,j=0,k,l,num;j<frequencyList.length;j++)
        {
            frequency=frequencyList[j]
            numsList=frequencyMap.get(frequency)
            numsList.sort((a,b)=>b-a)

            for(k=0;k<numsList.length;k++)
                for(l=0;l<frequency;l++)
                    numsSorted[i++]=numsList[k]
        }

    console.log(frequencyList, frequencyMap)

    return numsSorted
};