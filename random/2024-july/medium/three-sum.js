/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)

    if(nums[0]>0||nums.length<2)
        return []

    const triplets=[], idxsMap =new Map(),tripletsMap = new Map()
    let val

    nums.forEach((num, i)=>{
        val = idxsMap.get(num)

        if(val===undefined)
            idxsMap.set(num, [i])
        else
        {
            val.push(i)
            idxsMap.set(num, val)
        }
    })

    for(let i=0, j, innerMap, diff, isValid;i<nums.length&&nums[i]<=0;i++)
        for(j=i+1;j<nums.length;j++){
            diff=0-nums[i]-nums[j]

            if(diff<nums[i]||diff<nums[j])
                break

            val = idxsMap.get(diff)

            if(val!==undefined){
                if(tripletsMap.get(nums[i])===undefined)
                    tripletsMap.set(nums[i], new Map())
                innerMap=tripletsMap.get(nums[i])

                if(innerMap.get(nums[j])===undefined)
                   innerMap.set(nums[j], new Map())
                innerMap=innerMap.get(nums[j])

                if(innerMap.get(diff)!==undefined)
                    continue

                for(let k of val){
                    isValid = k!==i&&k!==j

                    if(isValid){
                        triplets.push([nums[i], nums[j], diff])
                        break
                    }
                }
                innerMap.set(diff, isValid)
            }
        }

    return triplets
};