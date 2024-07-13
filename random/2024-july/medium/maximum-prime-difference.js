/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    const isPrime=n=>{
        for(let i=2;i<=parseInt(n/2);i++)
            if(n%i===0)
                return false

        return true
    }
    firstIdx=null, lastIdx=null
    const primesMap = new Map()
    primesMap.set(1,false)

    let value
    nums.forEach((num,idx)=>
    {
        value = primesMap.get(num)

        if(value===undefined)
        {
            value=isPrime(num)
            primesMap.set(num, value)
        }

        if(!value)
            return

        if(firstIdx!==null)
            lastIdx=idx
        else
            firstIdx=lastIdx=idx
    })

    return lastIdx-firstIdx
};